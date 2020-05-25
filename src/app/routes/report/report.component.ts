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
  listAdmin = [
    {
      id: 2323,
      name:"bache",
      gravedad: 3,
      description:"Es un bache bien cabron que lleva varios dias asi",
      lat: 25.7582117,
      lng: -108.9833722,
      phone: 8188080,
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
        d.gravedad.toLowerCase().indexOf(val) !== -1 ||
        d.description.toLowerCase().indexOf(val) !== -1 ||
        d.phone.toLowerCase().indexOf(val) !== -1 ||
        d.name.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });
    console.log(temp);

    // update the rows
    this.listAdmin = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      let arr = {
        id: this.getRandomInt(100, 2),
        name: "bache" + (i + 1),
        gravedad: this.getRandomInt(4, 1),
        description: "Es un bache bien cabron que lleva varios dias asi",
        lat: 25.7582117,
        lng: -108.9833722,
        phone: this.getRandomInt(1000000, 2),
      };
      this.listAdmin.push(arr);
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  delete() {}
}
