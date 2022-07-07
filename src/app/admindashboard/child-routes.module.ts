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
  {
    path: 'admindashboard/lista-noticias',
    component: ListanoticiasComponent,
    data: { titulo: 'Lista de Noticias.' },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'admindashboard/lista-cuentas',
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