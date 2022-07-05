import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    PaguesRoutingModule,
    adminDashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
