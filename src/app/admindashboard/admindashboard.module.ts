import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard.component';
import { PanelComponent } from './panel/panel.component';
import { HeaderComponent } from './header/header.component';
import { ListanoticiasComponent } from './listanoticias/listanoticias.component';
import { ListacuentasComponent } from './listacuentas/listacuentas.component';


@NgModule({
  declarations: [
    NuevanoticiaComponent,
    AdmindashboardComponent,
    PanelComponent,
    HeaderComponent,
    ListanoticiasComponent,
    ListacuentasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    NuevanoticiaComponent,
    AdmindashboardComponent,
    PanelComponent,
  ]
})
export class AdmindashboardModule { }
