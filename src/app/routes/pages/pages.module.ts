import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";  

import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { ModalModule } from "ngx-bootstrap/modal";


@NgModule({
  imports: [
    ModalModule.forRoot(),
    ReactiveFormsModule,
    CommonModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [RouterModule, LoginComponent, RegisterComponent],
})
export class PagessModule {}
