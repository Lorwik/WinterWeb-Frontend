import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-listanoticias',
  templateUrl: './listanoticias.component.html',
  styleUrls: ['./listanoticias.component.css']
})
export class ListanoticiasComponent implements OnInit {

  constructor(private NoticiasService: NoticiasService) {
    this.NoticiasService.obtenernoticias();
  }

  ngOnInit(): void {
  }

  get Noticias() {
    return this.NoticiasService.noticias;
  }

}
