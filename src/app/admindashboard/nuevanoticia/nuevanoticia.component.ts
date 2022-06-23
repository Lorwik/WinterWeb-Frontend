import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevanoticia',
  templateUrl: './nuevanoticia.component.html',
  styleUrls: ['./nuevanoticia.component.css']
})
export class NuevanoticiaComponent implements OnInit {

  public formSubmitted = false;

  noticiaForm: FormGroup = new FormGroup({
    titulo: new FormControl(''),
    cuerpo: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private router: Router, private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.noticiaForm = this.fb.group({
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100)
        ]
      ],
      cuerpo: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8000)
        ]
      ],
    }
    );
  }

  onSubmit() {
    this.formSubmitted = true;
    
    if (this.noticiaForm.invalid) {
      return;
    }
    // Si el formulario es validor realizamos el Posteo
    this.noticiasService.publicarNoticia(this.noticiaForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/admindashboard');
      },
      error: (err) => {
        console.log(err)
        //En el caso de suceder un error  sweetalert2
        Swal.fire('Error', err.error.error, 'error');
      }

    });

  }

  get f(): { [key: string]: AbstractControl } {
    return this.noticiaForm.controls;
  }
}

