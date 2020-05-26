import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  marker: {
    lat: 25.8132204;
    lng: -108.9858821;
  };
  constructor() {
    this.report = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl("", [Validators.email, Validators.required]),
      phone: new FormControl("", [Validators.required]),
      date: new FormControl(Date),
      gravity: new FormControl("",Validators.required)
    });
  }

  ngOnInit() {}
}
