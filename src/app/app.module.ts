import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { StaffComponent } from './pages/staff/staff.component';
import { DescargasComponent } from './pages/descargas/descargas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultimediaComponent,
    StaffComponent,
    DescargasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
