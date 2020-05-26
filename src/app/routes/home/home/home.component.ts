import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import Swal from "sweetalert2";
import { AuthData } from "../../../services/auth.service";
import { async } from "@angular/core/testing";

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
  listAdmin = [];
  temp = [];
  timeout: any;
  expanded: any = {};
  selected = [];
  constructor(public dataService: AuthData) {}
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

  ngOnInit() {
    this.getData();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {}, 100);
  }
  delete(value) {
    this.getData()
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
        this.dataService.DeleteAdmin(value.id).subscribe((resp) => {
          
        });
      }
    });
  }

  getData() {
    this.dataService.listAdmins().subscribe(
      (resp) => {
        
         this.listAdmin = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  time() {
    setTimeout(function () {
      this.getData();
      this.timeout();
    }, 1000 / 60);
  }
}
