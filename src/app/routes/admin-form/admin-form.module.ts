import { NgModule } from '@angular/core';
import { AdminFormComponent } from './admin-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from "@angular/common";  
import { ImageCropperModule } from "ng2-img-cropper";
import { ReactiveFormsModule } from "@angular/forms";


const routes: Routes = [{ path: "", component: AdminFormComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgxDatatableModule,
    CommonModule,
    ReactiveFormsModule,
    ImageCropperModule,
  ],
  declarations: [AdminFormComponent],
  exports: [RouterModule],
})
export class AdminFormModule {}
