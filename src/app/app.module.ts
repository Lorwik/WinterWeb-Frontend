import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { userDashboardModule } from './userDashboard/dashboard.module';
import { AdmindashboardModule } from './admindashboard/admindashboard.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    PagesModule,
    userDashboardModule,
    AdmindashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
