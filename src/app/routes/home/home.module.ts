import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxDatatableModule],
  declarations: [HomeComponent],
  exports: [RouterModule],
})
export class HomeModule {}
