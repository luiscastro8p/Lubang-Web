import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
             { path: "", redirectTo: "/login", pathMatch: "full", },
             { path: "home", loadChildren: "./home/home.module#HomeModule" },
             {
               path: "Reportes",
               loadChildren: "./report/report.module#ReportModule",
             },
           ],
         },

         // Not found
         { path: "register", component: RegisterComponent },
         { path: "login", component: LoginComponent },
         { path: "**", redirectTo: "/login" },
       ];
