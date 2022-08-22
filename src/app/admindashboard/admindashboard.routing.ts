import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdmindashboardComponent } from './admindashboard.component';

const routes: Routes = [
    {
        path: '',
        component: AdmindashboardComponent,
        loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule )
      },
      
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class adminDashboardRoutingModule {}
