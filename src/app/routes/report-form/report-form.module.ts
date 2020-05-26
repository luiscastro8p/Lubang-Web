import { NgModule } from '@angular/core';
import { ReportFormComponent } from './report-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from "@angular/common";  
import { ImageCropperModule } from "ng2-img-cropper";
import { ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ColorPickerModule, ColorPickerService } from "ngx-color-picker";

import { ModalModule } from "ngx-bootstrap/modal";

const routes: Routes = [{ path: "", component: ReportFormComponent }];

@NgModule({
  providers: [ColorPickerService],
  imports: [
    RouterModule.forChild(routes),
    NgxDatatableModule,
    CommonModule,
    ReactiveFormsModule,
    ImageCropperModule,
    BsDatepickerModule,
    ColorPickerModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA",
      libraries: ["places", "drawing", "geometry"],
    }),
  ],
  declarations: [ReportFormComponent],
  exports: [RouterModule],
})
export class ReportFormModule {}
