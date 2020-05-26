import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthData } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import {Uris } from '../../services/Uris'

@Component({
  selector: "app-report-form",
  templateUrl: "./report-form.component.html",
  styleUrls: ["./report-form.component.scss"],
})
export class ReportFormComponent implements OnInit {
  report: FormGroup;
  lat: number = 25.8132204;
  lng: number = -108.9858821;
  zoom = 15;
  data = {};
  image:any;
  url:any = Uris.API_IMAGE
  id;
  SelectPrioriry = [ 1, 2, 3 ]
  
  marker: {
    lat: 25.8132204;
    lng: -108.9858821;
  };
  constructor(
    public DataService: AuthData,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.report = new FormGroup({
      reportTypeId: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      priority: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.id = id;
    let user = <any>JSON.parse(localStorage.getItem("USER"));
    console.log(user);

    if (id) {
      this.DataService.getReport(id).subscribe((resp) => {
        this.data = resp;
        this.image = this.url + resp.photo
      
        console.log(resp);
        this.lat = resp.lat;
        this.lng = resp.lng;
        this.report.setValue({
          reportTypeId: resp.reportType.name,
          description: resp.description,
          priority: resp.priority,
          status:resp.status
        });
      });
      // this.adminagronodo.controls['username'].disable();
      // this.adminagronodo.controls['email'].disable();
    }
  }
  register(value) {
    console.log(value);
    let obj = {
      name: value.reportTypeId,
      description: value.description,
      priority: value.priority,
      status:value.status
    };
    console.log(obj);
    
    Swal.fire({
      text: "Guardar información",
      allowOutsideClick: false,
      width: "270px",
    });
    Swal.showLoading();
    this.DataService.editReport(obj, this.id).subscribe((resp) => {
      Swal.fire({
        text: "Se creó correctamente " + value.name,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        width: "250px",
      });
      this.router.navigateByUrl("/Reportes");
    });
  
  }
}
