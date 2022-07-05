import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';

import { AuthGuard } from '../guards/auth.guard';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';
import { PanelComponent } from './panel/panel.component';

const childRoutes: Routes = [
  {
    path: '',
    component: PanelComponent,
    data: { titulo: 'Panel de administración' },
    canActivate: [ AuthGuard, AdminGuard ],
    canLoad: [ AuthGuard, AdminGuard ],
  },
  {
    path: 'admindashboard/nuevaNoticia',
    component: NuevanoticiaComponent,
    pathMatch: 'full',
    data: { titulo: 'Nueva noticia' },
    canActivate: [ AuthGuard, AdminGuard ],
    canLoad: [ AuthGuard, AdminGuard ],
  },

]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }