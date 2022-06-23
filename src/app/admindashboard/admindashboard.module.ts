import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NuevanoticiaComponent
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
