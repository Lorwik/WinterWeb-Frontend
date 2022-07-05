import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    {
        path: 'perfil',
        component: PerfilComponent,
        pathMatch: 'full',
        canActivate: [ AuthGuard ],
        canLoad: [ AuthGuard ],
      },
      
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class userDashboardRoutingModule {}
