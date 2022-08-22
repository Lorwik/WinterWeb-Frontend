import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ReCaptcha2Component } from 'ngx-captcha';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmar-cuenta',
  templateUrl: './confirmar-cuenta.component.html',
  styleUrls: ['./confirmar-cuenta.component.css']
})
export class ConfirmarCuentaComponent implements OnInit {
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

  confirmarForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    codigo: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    if (this.usuarioService.isLoggedIn) {
      this.router.navigateByUrl('/perfil');
    }

    this.confirmarForm = this.fb.group({
      username: [
        localStorage.getItem('username') || '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      codigo: [
        '',
        [
          Validators.required,
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
    return this.confirmarForm.controls;
  }

  confirmar() {
    if (this.captchaSuccess === false) {
      Swal.fire('Error', 'Verifique el CAPTCHA', 'error');
      return;
    }

    this.usuarioService.confirmarCuenta(this.confirmarForm.value).subscribe({
      next: () => {
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
