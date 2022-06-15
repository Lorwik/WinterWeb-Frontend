import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { StaffComponent } from './staff/staff.component';
import { DescargasComponent } from './descargas/descargas.component';

@NgModule({
  declarations: [
    HomeComponent,
    MultimediaComponent,
    StaffComponent,
    DescargasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    MultimediaComponent,
    StaffComponent,
    DescargasComponent
  ]
})
export class PagesModule { }
