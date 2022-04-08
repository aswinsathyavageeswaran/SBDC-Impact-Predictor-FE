import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
      public appService: AppService,
      private router: Router
  ) { 
      this.appService.pageTitle = "Dashboard";
      this.appService.fromLoginPage = false;
  }

  public goToHome() {
    this.appService.pageTitle = "Dashboard";
    this.router.navigateByUrl("main/dashboard");
  }

  public gotoLogin() {
      this.router.navigateByUrl("/login")
  }
}
