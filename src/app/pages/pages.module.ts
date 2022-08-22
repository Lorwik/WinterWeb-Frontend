import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';

import { MultimediaComponent } from './multimedia/multimedia.component';
import { StaffComponent } from './staff/staff.component';
import { DescargasComponent } from './descargas/descargas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CambiarpassComponent } from './cambiarpass/cambiarpass.component';
import { ConfirmarCuentaComponent } from './auth/confirmar-cuenta/confirmar-cuenta.component';

@NgModule({
  declarations: [
    MultimediaComponent,
    StaffComponent,
    DescargasComponent,
    NoticiasComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    PerfilComponent,
    CambiarpassComponent,
    ConfirmarCuentaComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule
  ],
  exports: [
    MultimediaComponent,
    StaffComponent,
    DescargasComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    CambiarpassComponent,
  ]
})
export class PagesModule { }
