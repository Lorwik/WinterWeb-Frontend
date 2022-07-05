import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
    {
        path: 'admindashboard/nuevaNoticia',
        component: NuevanoticiaComponent,
        pathMatch: 'full',
        canActivate: [ AuthGuard, AdminGuard ],
        canLoad: [ AuthGuard, AdminGuard ],
      },
      
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class adminDashboardRoutingModule {}
