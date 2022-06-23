import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { userDashboardRoutingModule } from './userDashboard/dashboard.routing';
import { PaguesRoutingModule } from './pages/pages.routing';
import { adminDashboardRoutingModule } from './admindashboard/admindashboard.routing';

const routes: Routes = [
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PaguesRoutingModule,
    userDashboardRoutingModule,
    adminDashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
