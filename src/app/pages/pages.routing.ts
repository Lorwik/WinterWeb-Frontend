import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { StaffComponent } from './staff/staff.component';
import { DescargasComponent } from './descargas/descargas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
    {
        path: 'multimedia',
        component: MultimediaComponent
      },
      {
        path: 'staff',
        component: StaffComponent
      },
      {
        path: 'descargas',
        component: DescargasComponent
      },
      
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaguesRoutingModule {}
