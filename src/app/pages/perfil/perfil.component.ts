import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  router: any;
  public usuario: Usuario;

  constructor( private usuarioService: UsuarioService ) {
    this.usuario = usuarioService.usuario;
    console.log(this.usuario)
  }

  ngOnInit(): void {
  }

  deslogear() {
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }

  cambiarPass() {

  }

  donar() {

  }

  vip() {}

}
