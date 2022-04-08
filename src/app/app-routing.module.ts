import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostProjectionComponent } from './cost-projection/cost-projection.component';
import { LoginComponent } from './login-page/login-page.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "main",
    component: MainComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "costprojection",
        component: CostProjectionComponent
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
