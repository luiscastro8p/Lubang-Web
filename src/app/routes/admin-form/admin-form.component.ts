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
import { AuthData } from "../../services/auth.service";
import { Uris } from "../../services/Uris"

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
  public image: string = "";
  url = Uris.API_IMAGE

  public filestring: string = "";
  public filename: any = [];

  cropperSettings: CropperSettings;
  @ViewChild("cropper", undefined) cropper: ImageCropperComponent;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public DataService: AuthData
  ) {
    this.admin = new FormGroup({
      name: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
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
      this.DataService.getAdmin(id).subscribe((resp) => {
        console.log(resp);
        this.filestring = this.url + resp.photo
        this.admin.setValue({
          name: resp.name,
          lastName: resp.lastName,
          password: resp.password,
          email: resp.email,
          phone: resp.phone,
        });
      });
      // this.adminagronodo.controls['username'].disable();
      // this.adminagronodo.controls['email'].disable();
    }
  }
  register(value: any) {
    Swal.fire({
      text: "Guardar información",
      allowOutsideClick: false,
      width: "270px",
    });
    Swal.showLoading();
    if (this.id == null) {
      this.create(value);
    } else {
      this.update(value);
    }
  }
  create(value: any) {
    let obj = {
      email: value.email,
      password: value.password,
      name: value.name,
      phone: value.phone,
      lastName: value.lastName,
      photo: this.image,
    };
    this.DataService.RegisterAdmin(obj).subscribe(
      (resp) => {
        Swal.fire({
          text: "Se creó correctamente " + value.name,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          width: "250px",
        });
        this.router.navigateByUrl("/list");
      },
      (err) => {
        console.log(err);
      }
    );
  }
  update(value: any) {
    let obj = {
      name: value.name,
      phone: value.phone,
      lastName: value.lastname,
      photo: this.image,
    };
    console.log(value);
    this.DataService.editAdmin(obj, this.id).subscribe(
      (resp) => {
        Swal.fire({
          text: "Se creó correctamente " + value.name,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          width: "250px",
        });
        this.router.navigateByUrl("/list");
      },
      (err) => {
        console.log(err);
      }
    );
  }

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
    this.image = base64Image;
    console.log(this.filestring);
  }
}
