import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard.component';



@NgModule({
  declarations: [
    NuevanoticiaComponent,
    AdmindashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdmindashboardModule { }
