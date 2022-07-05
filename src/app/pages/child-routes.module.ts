import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiasComponent } from './noticias/noticias.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { StaffComponent } from './staff/staff.component';
import { DescargasComponent } from './descargas/descargas.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../guards/auth.guard';
import { CambiarpassComponent } from './cambiarpass/cambiarpass.component';

const childRoutes: Routes = [
  {
    path: '',
    component: NoticiasComponent,
    data: { titulo: 'Inicio' }
  },
  {
    path: 'multimedia',
    component: MultimediaComponent,
    data: { titulo: 'Multimedia' }
  },
  {
    path: 'staff',
    component: StaffComponent,
    data: { titulo: 'Staff' }
  },
  {
    path: 'descargas',
    component: DescargasComponent,
    data: { titulo: 'Descargas' }
  },
  {
    path: 'registro',
    component: RegisterComponent,
    data: { titulo: 'registro' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { titulo: 'Login' }
  },

  // Rutas protegidas de usuarios:
  {
    path: 'perfil',
    component: PerfilComponent,
    pathMatch: 'full',
    data: { titulo: 'Perfil de cuenta' },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'cambiar-password',
    component: CambiarpassComponent,
    data: { titulo: 'Cambiar contraseña.' },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }