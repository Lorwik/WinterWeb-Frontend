import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';

import { AuthGuard } from '../guards/auth.guard';
import { ListacuentasComponent } from './listacuentas/listacuentas.component';
import { ListanoticiasComponent } from './listanoticias/listanoticias.component';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';
import { PanelComponent } from './panel/panel.component';

const childRoutes: Routes = [
  {
    path: 'adminDashboard',
    component: PanelComponent,
    data: { titulo: 'Panel de administración' },
    canActivate: [ AuthGuard, AdminGuard ],
    canLoad: [ AuthGuard, AdminGuard ],
  },
  {
    path: 'nuevaNoticia',
    component: NuevanoticiaComponent,
    pathMatch: 'full',
    data: { titulo: 'Nueva noticia' },
    canActivate: [ AuthGuard, AdminGuard ],
    canLoad: [ AuthGuard, AdminGuard ],
  },
  {
    path: 'lista-noticias',
    component: ListanoticiasComponent,
    data: { titulo: 'Lista de Noticias.' },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'lista-cuentas',
    component: ListacuentasComponent,
    data: { titulo: 'Lista de Cuentas.' },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },

]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }