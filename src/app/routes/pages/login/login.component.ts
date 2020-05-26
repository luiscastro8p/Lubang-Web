import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../../../core/settings/settings.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { ActivatedRoute, Router } from "@angular/router";
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
      console.log("Valid!");
      console.log(value);
    }
  }

  ngOnInit() {}

  register() {
    window.location.href = "https://we.tl/t-ooiI9IFL3r";
    // this.router.navigateByUrl("/https://we.tl/t-ooiI9IFL3r");
  }
}
