import { NgModule } from '@angular/core';
import { ReportComponent } from './report.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from "@angular/common";  

const routes: Routes = [{ path: "", component: ReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxDatatableModule, CommonModule],
  declarations: [ReportComponent],
  exports: [RouterModule],
})
export class ReportModule {}
