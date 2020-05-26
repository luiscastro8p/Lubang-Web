import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes = [
         {
           path: "",
           component: LayoutComponent,
           children: [
             { path: "", redirectTo: "/login", pathMatch: "full" },
             { path: "list", loadChildren: "./home/home.module#HomeModule" },
             {
               path: "list/new",
               loadChildren: "./admin-form/admin-form.module#AdminFormModule",
             },
             {
               path: "list/:id",
               loadChildren: "./admin-form/admin-form.module#AdminFormModule",
             },

             {
               path: "Reportes",
               loadChildren: "./report/report.module#ReportModule",
             },
             {
               path: "Reportes/:id",
               loadChildren:
                 "./report-form/report-form.module#ReportFormModule",
             },
           ],
         },

         // Not found
         { path: "register", component: RegisterComponent },
         { path: "login", component: LoginComponent },
         { path: "**", redirectTo: "/login" },
       ];
