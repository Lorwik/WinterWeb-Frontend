import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { HomeComponent } from './pages/home/home.component';
import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { StaffComponent } from './pages/staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'multimedia',
    component: MultimediaComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'descargas',
    component: DescargasComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
