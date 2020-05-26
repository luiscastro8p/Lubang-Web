import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Uris } from './Uris';

@Injectable({
  providedIn: "root",
})
export class AuthData {
  private token: String;
  constructor(public http: Http) {
    this.token = localStorage.getItem("token")
      ? <any>JSON.parse(localStorage.getItem("USER")).token
      : null;
  }

  login(admin) {
    return this.http
      .post(`${Uris.Login}`, admin)
      .map((response: Response) => response.json());
  }

  listAdmins() {
    return this.http
      .get(`${Uris.Admin}`, this.jwt())
      .map((response: Response) => response.json());
  }
  getAdmin(value) {
    return this.http
      .get(`${Uris.Admin}${value}/`)
      .map((response: Response) => response.json());
  }

  editAdmin(value, id) {
    return this.http
      .put(`${Uris.Admin}${id}/`, value, this.jwt())
      .map((response: Response) => response.json());
  }

  RegisterAdmin(admin) {
    return this.http
      .post(`${Uris.Admin}`, admin)
      .map((response: Response) => response.json());
  }
  DeleteAdmin(admin) {
    return this.http
      .delete(`${Uris.Admin}${admin}`)
      .map((response: Response) => response.json());
  }
  getReport(value) {
    return this.http
      .get(`${Uris.Report}${value}/`)
      .map((response: Response) => response.json());
  }
  listReport() {
    return this.http
      .get(`${Uris.Report}`)
      .map((response: Response) => response.json());
  }
  editReport(value, id) {
    return this.http
      .put(`${Uris.Report}${id}/`, value)
      .map((response: Response) => response.json());
  }
  DeleteReport(report) {
    return this.http
      .delete(`${Uris.Report}${report}`)
      .map((response: Response) => response.json());
  }
  // delete(value) {
  //   return this.http.delete(`${Uris.API_LOTS_DELETE}${value}/`, this.jwt()).map((response: Response) => response.json())
  // }
  // deleteSub(value) {
  //   return this.http.delete(`${Uris.API_SUB_LOTS_DELETE}${value}/`, this.jwt()).map((response: Response) => response.json())
  // }
  // SubloteRegister(sublote) {
  //   return this.http.post(`${Uris.API_SUB_LOTS_REGISTER}`, sublote, this.jwt()).map((response: Response) => response.json())
  // }
  // EditSublote(value, id) {
  //   return this.http.put(`${Uris.API_SUB_LOTS_EDIT}${id}/`, value, this.jwt()).map((response: Response) => response.json())
  // }
  // GetSublot() {
  //   return this.http.get(`${Uris.API_SUB_LOTS_GET_LIST}`, this.jwt()).map((response: Response) => response.json())
  // }

  // GetSubloteID(id) {
  //   return this.http.get(`${Uris.API_SUB_LOT_GET_ID}${id}/`, this.jwt()).map((response: Response) => response.json())
  // }
  // CicleRegister(id, value) {
  //   return this.http.post(`${Uris.API_CICLE_POST}${id}/cicles/`, value, this.jwt()).map((response: Response) => response.json())
  // }
  // GetCicleid(id) {
  //   return this.http.get(`${Uris.API_CICLE_WEEKS_GET}${id}/pathingsweeks/`, this.jwt()).map((response: Response) => response.json())
  // }
  // GetReportListid(sub, rep) {
  //   return this.http.get(`${Uris.API_REPORT_LIST_GET}${sub}/pathings/${rep}/reports`, this.jwt()).map((response: Response) => response.json())
  // }
  // GetListPathingsID(sub, rep) {
  //   return this.http.get(`${Uris.API_PATHINGS_LIST_GET}${sub}/pathings/${rep}`, this.jwt()).map((response: Response) => response.json())
  // }
  // GetListPathingsList(sub) {
  //   return this.http.get(`${Uris.API_PATHINGS_LIST_GET}${sub}/pathings/`, this.jwt()).map((response: Response) => response.json())
  // }
  // GetReportSolo(sub, rut, rep) {
  //   return this.http.get(`${Uris.API_PATHINGS_LIST_GET}${sub}/pathings/${rut}/reports/${rep}/`, this.jwt()).map((response: Response) => response.json())
  // }

  // Getcrops() {
  //   return this.http.get(`${Uris.API_CROPS_LIST_GET}`, this.jwt()).map((response: Response) => response.json())
  // }
  // registerCrops(admin) {
  //   return this.http.post(`${Uris.API_CROPS_LIST_GET}`, admin, this.jwt()).map((response: Response) => response.json())
  // }

  errorHandler(error: any): void {
    console.log("SUPER ERROR", error);
    if (localStorage.getItem("token") && error.status == 401) {
      localStorage.removeItem("token");
    }
  }

  private jwt() {
    if (this.token) {
      let headers = new Headers();
      let user = JSON.parse(localStorage.getItem("USER"));
      headers.append("Content-Type", "application/json");
      headers.append("Accept-language", "en-es");
      headers.append("Authorization", `token ${user.token}`);
      return new RequestOptions({ headers: headers });
    }
  }
}





