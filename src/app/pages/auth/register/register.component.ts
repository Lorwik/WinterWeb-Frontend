import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ReCaptcha2Component } from 'ngx-captcha';

import { UsuarioService } from 'src/app/services/usuario.service';
import Validation from 'src/app/utils/validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
  ]
})
export class RegisterComponent implements OnInit {
  aFormGroup!: FormGroup;
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
  @ViewChild('langInput') langInput!: ElementRef;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'dark';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'es';
  public type!: 'image' | 'audio';

  public formSubmitted = false;

  public registroExito = false;

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    terminos: new FormControl(false),
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    if (this.usuarioService.isLoggedIn) {
      this.router.navigateByUrl('/perfil');
    }

    this.registerForm = this.fb.group({
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(24)
          ]
        ],
        password2: ['', Validators.required],
        terminos: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'password2')]
      }
    );

    this.aFormGroup = this.fb.group({
      recaptcha: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  crearCuenta() {

    this.formSubmitted = true;

    if (this.captchaSuccess === false) {
      Swal.fire('Error', 'Verifique el CAPTCHA', 'error');
      return;
    }

    if (this.registerForm.invalid) {
      return;
    }

    // Si el formulario es validor realizamos el Posteo
    this.usuarioService.crearUsuario( this.registerForm.value ).subscribe({
      next: () => {
        this.registroExito = true;
      },
      error: (err) => {
        console.log(err)
        //En el caso de suceder un error  sweetalert2
        Swal.fire('Error', err.error.error, 'error');
      }

    });

  }

  handleSuccess(data: any) {
    this.captchaSuccess = true;
  }

}
