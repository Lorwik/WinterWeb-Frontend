import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pagActual: number;

  constructor(private NoticiasService: NoticiasService) {
    this.NoticiasService.obtenernoticias();
    this.pagActual = 0;
  }

  ngOnInit(): void {
  }

  get Noticias() {
    return this.NoticiasService.noticias;
  }

  especificarPagina(numero: number){

    this.pagActual = numero;

  }

}
