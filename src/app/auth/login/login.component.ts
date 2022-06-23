import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public formSubmitted = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(false),
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        username: [
          '',
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
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    this.usuarioService.login( this.loginForm.value ).subscribe({
      next: () => {
        if ( this.loginForm.get('remember')?.value ){ 
          localStorage.setItem('username', this.loginForm.get('username')?.value );

        } else {
          localStorage.removeItem('username');

        }

        // Navegar al Dashboard
        this.router.navigateByUrl('/');
      },
      error: err => {
        Swal.fire('Error', err.error.error, 'error');
      }
    });

  }

}
