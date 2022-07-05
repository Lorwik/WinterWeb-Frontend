import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

import { UsuarioService } from 'src/app/services/usuario.service';
import Validation from 'src/app/utils/validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
  ]
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    terminos: new FormControl(false),
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
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
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  crearCuenta() {

    this.formSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Si el formulario es validor realizamos el Posteo
    this.usuarioService.crearUsuario( this.registerForm.value ).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        console.log(err)
        //En el caso de suceder un error  sweetalert2
        Swal.fire('Error', err.error.error, 'error');
      }

    });

  }

}
