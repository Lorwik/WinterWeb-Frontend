import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { Usuario } from '../models/usuario.model';

const AUTH_API = `${environment.base_url}/auth/`;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: Usuario;

  constructor(private http: HttpClient,
    private router: Router,
    private ngZone: NgZone) {
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${AUTH_API}register`, formData)
      .pipe(
        tap((resp: any) => {

          localStorage.setItem('token', resp.data.token)
        })
      )

  }

  login(formData: LoginForm) {

    return this.http.post(`${AUTH_API}login`, formData)
      .pipe(
        tap((resp: any) => {

          localStorage.setItem('token', resp.data.token)
        })
      );

  }

  logout() {
    localStorage.removeItem('token');

    this.ngZone.run(() => {
      this.router.navigateByUrl('/login');
    })

  }

  parseJwt (token: string){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
  
    return JSON.parse(window.atob(base64));
  };

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  obtenerUsuario() {
    const { id, username, email, vip, role, updatedAt, createdAt } = this.parseJwt(this.getToken());
    this.usuario = new Usuario(id, username, email, vip, role, updatedAt, createdAt);
  }

  getRole(): string { 
    return this.usuario.role;
  }

}
