import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReCaptcha2Component } from 'ngx-captcha';

import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(false),
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    if (this.usuarioService.isLoggedIn) {
      this.router.navigateByUrl('/perfil');
    }

    this.loginForm = this.fb.group({
      username: [
        localStorage.getItem('username') || '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(24)
        ]
      ],
      remember: [false]
    }
    );

    this.aFormGroup = this.fb.group({
      recaptcha: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {

    if (this.captchaSuccess === false) {
      Swal.fire('Error', 'Verifique el CAPTCHA', 'error');
      return;
    }

    this.usuarioService.login(this.loginForm.value).subscribe({
      next: () => {
        if (this.loginForm.get('remember')!.value) {
          localStorage.setItem('username', this.loginForm.get('username')?.value);

        } else {
          localStorage.removeItem('username');

        }

        // Navegar al Dashboard
        this.router.navigateByUrl('/perfil');
      },
      error: err => {
        Swal.fire('Error', err.error.error, 'error');
      }
    });

  }

  handleSuccess(data: any) {
    this.captchaSuccess = true;
  }

}
