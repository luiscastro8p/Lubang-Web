import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { UsernameValidator } from "./../../validators/UsernameValidator ";
import {
  ImageCropperComponent,
  CropperSettings,
  Bounds,
} from "ng2-img-cropper";
import Swal from "sweetalert2";

@Component({
  selector: "app-admin-form",
  templateUrl: "./admin-form.component.html",
  styleUrls: ["./admin-form.component.scss"],
})
export class AdminFormComponent implements OnInit {
  id;
  admin: FormGroup;
  mostrar: boolean;
  photo: string;
  name: string;
  data1: any;
  public files: any;
  public filestring: string = "";
  public filename: any = [];

  cropperSettings: CropperSettings;
  @ViewChild("cropper", undefined) cropper: ImageCropperComponent;

  constructor(private route: ActivatedRoute, public router: Router) {
    this.admin = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.email, Validators.required]),
      phone: new FormControl("", [Validators.required]),
      username: new FormControl("", [
        Validators.required,
        UsernameValidator.cannotContainSpace,
      ]),
    });

    this.name = "Angular2";
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.width = 200;
    this.cropperSettings.height = 200;
    this.cropperSettings.croppedWidth = 200;
    this.cropperSettings.croppedHeight = 200;
    this.cropperSettings.canvasWidth = 300;
    this.cropperSettings.canvasHeight = 300;
    this.cropperSettings.minWidth = 100;
    this.cropperSettings.minHeight = 100;
    this.cropperSettings.cropperDrawSettings.strokeColor = "rgba(0,0,0,.25)";
    this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
    this.cropperSettings.rounded = false;
    this.data1 = {};
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.id = id;

  
    if (id) {
      
      // this.adminagronodo.controls['username'].disable();
      // this.adminagronodo.controls['email'].disable();
    }
  }
  register(value: any) {
    // Swal.fire({
    //   text: "Guardar información",
    //   allowOutsideClick: false,
    //   width: "270px",
    // });
    // Swal.showLoading();
    if (this.id == null) {
      this.create(value);
    } else {
      this.update(value);
    }
  }
  create(value: any) {
    console.log(value);
    
  }
  update(value: any) {}

  fileChangeListener($event): void {
    //base 64
    this.filestring = $event.target.files[0];
    this.files = $event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    // Converting binary string data.
    let base64Image = btoa(binaryString);
    this.filestring = "data:image/jpeg;base64," + base64Image;
    console.log(this.filestring);
  }
}
