import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

const AUTH_API = `${environment.base_url}/auth/`;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${AUTH_API}renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.data.token);
      }),
      map(resp => true),
      catchError(error => of(false))
    );

  }



}
