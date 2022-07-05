import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminDashboardRoutingModule } from './admindashboard/adminDashboard.routing';
import { PaguesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PaguesRoutingModule,
    adminDashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
