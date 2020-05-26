import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import Swal from "sweetalert2";
import { AuthData } from "../../services/auth.service";

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
  listReport = [];
  temp = [];
  timeout: any;
  expanded: any = {};
  selected = [];
  constructor(public DataService: AuthData) {}
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

  ngOnInit() {
    this.getData();
  }
  getData() {
     this.DataService.listReport().subscribe((resp) => {
       console.log(resp);
       this.listReport = resp;
     });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {}, 100);
  }

  delete(value) {
    Swal.fire({
      title: "Seguro que quieres eliminar a",
      text: value.name,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
    }).then((result) => {
      if (result.value) {
        this.DataService.DeleteReport(value.id).subscribe(resp => {

        });
      
      }
    });
  }
  markerClicked(value) {
    console.log("entro");
  }
}
