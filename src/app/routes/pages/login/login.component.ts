import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../../../core/settings/settings.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthData } from "../../../services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  valForm: FormGroup;
  mostrar = true;
  constructor(
    public settings: SettingsService,
    fb: FormBuilder,
    public router: Router,
    public AuthService: AuthData
  ) {
    this.valForm = fb.group({
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email]),
      ],
      password: [null, Validators.required],
    });
  }

  submitForm($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {
        Swal.fire({
          text: "Guardar información",
          allowOutsideClick: false,
          width: "270px",
        });
        Swal.showLoading();
      this.AuthService.login(value).subscribe(resp => {
        Swal.close();
          this.router.navigateByUrl('/list')
      }, err => {
          console.log(err);
          
      })
    }
  }

  ngOnInit() {}

  register() {
    window.location.href = "https://we.tl/t-ooiI9IFL3r";
    // this.router.navigateByUrl("/https://we.tl/t-ooiI9IFL3r");
  }
}
