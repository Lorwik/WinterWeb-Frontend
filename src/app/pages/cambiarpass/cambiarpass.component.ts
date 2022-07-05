import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Validation from 'src/app/utils/validation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiarpass',
  templateUrl: './cambiarpass.component.html',
  styleUrls: ['./cambiarpass.component.css']
})
export class CambiarpassComponent implements OnInit {

  public formSubmitted = false;

  cambiarPassForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    newpassword: new FormControl(''),
    newpassword2: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.cambiarPassForm = this.fb.group({
        password: ['', Validators.required],
        newpassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(24)
          ]
        ],
        newpassword2: ['', Validators.required],
      },
      {
        validators: [Validation.match('newpassword', 'newpassword2')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.cambiarPassForm.controls;
  }

  cambiarPass(){
    this.formSubmitted = true;

    if (this.cambiarPassForm.invalid) {
      return;
    }

    // Si el formulario es validor realizamos el Posteo
    this.usuarioService.cambiarPassword( this.cambiarPassForm.value ).subscribe({
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
