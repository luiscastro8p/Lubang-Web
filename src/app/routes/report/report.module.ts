import { NgModule } from '@angular/core';
import { ReportComponent } from './report.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from "@angular/common";  
import { AgmCoreModule } from "@agm/core";

const routes: Routes = [{ path: "", component: ReportComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgxDatatableModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA",
      libraries: ["places", "drawing", "geometry"],
    }),
  ],
  declarations: [ReportComponent],
  exports: [RouterModule],
})
export class ReportModule {}
