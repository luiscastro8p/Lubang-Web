import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import Swal from "sweetalert2";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("table") tableExp: any;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  filterPost = "";
  editing = {};
  listAdmin = [
    {
      id: 2323,
      name: "Luis Armando Castro Cota",
      email: "luisarmandocastro@gmail.com",
      phone: 8188080,
    },
    {
      id: 848484,
      name: "Jose Francisco Osuna Caranza",
      lastname: "Castro",
      email: "ChepeCharmander@gmail.com",
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
        d.name.toLowerCase().indexOf(val) !== -1 ||
        d.lastname.toLowerCase().indexOf(val) !== -1 ||
        d.email.toLowerCase().indexOf(val) !== -1 ||
        d.phone.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });
    console.log(temp);

    // update the rows
    this.listAdmin = temp;
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
}
