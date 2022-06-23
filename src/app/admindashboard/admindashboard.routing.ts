import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';

const routes: Routes = [
    {
        path: 'admindashboard/nuevaNoticia',
        component: NuevanoticiaComponent,
        pathMatch: 'full',
        //canActivate: [ AuthGuard ]
      },
      
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class adminDashboardRoutingModule {}
