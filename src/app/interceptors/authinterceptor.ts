import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private usuarioService: UsuarioService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.usuarioService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return next.handle(req);
  }
}