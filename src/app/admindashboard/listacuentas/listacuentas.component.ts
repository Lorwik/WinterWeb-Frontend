import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listacuentas',
  templateUrl: './listacuentas.component.html',
  styleUrls: ['./listacuentas.component.css']
})
export class ListacuentasComponent implements OnInit {

  constructor( private usuarioService: UsuarioService) {
    usuarioService.listarusuarios();
  }

  ngOnInit(): void {
  }

  get Usuarios() {
    return this.usuarioService.usuarios;
  }

}

