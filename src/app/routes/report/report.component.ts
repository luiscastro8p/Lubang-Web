import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import Swal from "sweetalert2";

@Component({
  selector: "app-home",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent implements OnInit {
  @ViewChild("table") tableExp: any;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  filterPost = "";
  editing = {};
  lat: number = 25.8132204;
  lng: number = -108.9858821;
  zoom = 12;
  listReport = [
    {
      id: this.getRandomInt(10123123, 1),
      name: "bache",
      status: "RESOLVED",
      priority: this.getRandomInt(4, 1),
      description: "Es un bache bien cabron que lleva varios dias asi",
      lat: 25.7753341,
      lng: -109.0192314,
    },
    {
      id: this.getRandomInt(10123123, 1),
      name: "Señal de stop rayada",
      status: "RESOLVED",
      description: "unos cholos lo hicieron hace tiempo",
      priority: this.getRandomInt(4, 1),
      lat: 25.7582117,
      lng: -108.9833722,
    },
    {
      id: this.getRandomInt(10123123, 1),
      name: "la calle esta del asco",
      status: "ATTENDED",
      description: "arreglen esto que ya tienen mucho ",
      priority: this.getRandomInt(4, 1),
      lat: 25.7582117,
      lng: -108.9833722,
    },
    {
      id: this.getRandomInt(10123123, 1),
      name: "Boulevart mal pavimentado ",
      status: "CREATED",
      description:
        "Hace dias realizaron unas actividades a las palmas y los mismos trabajadores dejaron huecos en el boulevart",
      priority: this.getRandomInt(4, 1),
      lat: 25.7582117,
      lng: -108.9833722,
    },
  ];
  temp = [];
  timeout: any;
  expanded: any = {};
  selected = [];
  constructor() {}
  updateFilter(event) {
    console.log("entro");

    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return (
        d.gravity.toLowerCase().indexOf(val) !== -1 ||
        d.description.toLowerCase().indexOf(val) !== -1 ||
        d.phone.toLowerCase().indexOf(val) !== -1 ||
        d.name.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });
    console.log(temp);

    // update the rows
    this.listReport = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  ngOnInit() {}

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {}, 100);
  }

  delete() {}
  markerClicked(value) {
    console.log("entro");
    
  }
}
