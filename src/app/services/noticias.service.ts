import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Noticia, Noticias } from '../interfaces/noticias.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const AUTH_API = `${environment.base_url}/noticias`;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  public noticias!: Noticias;

  constructor(private http: HttpClient) { }

  obtenernoticias(){
    return this.http.get<Noticias>(`${AUTH_API}`)
    .subscribe((resp) => {
      this.noticias = resp;
    });
  }

  publicarNoticia(formData: Noticia) {
    return this.http.post(`${AUTH_API}`, formData, httpOptions);

  }

}
