import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(
        private appService: AppService,
        private router: Router
    ) { }
  public username: string = "";
  public password: any = "";
  public hasError: boolean = false;
  private user: any;


  public ngOnInit(): void {
    this.user = this.appService.user;
  }

  public redirectToReg(): void {
    // this.router.navigateByUrl("/register");
  }

  public signIn(): void {
    this.appService.fromLoginPage = true;
    this.appService.isLoading = true;
    var root = this;
    setTimeout(() => {
      if (root.username == root.user.name && root.password == root.user.password) {
        root.router.navigateByUrl("/main/dashboard");
      }
    //   else if (root.username == root.appService.bankUser.name && root.password == root.appService.bankUser.password) {
    //     root.router.navigateByUrl("/bank");
    //   }
      else {
        root.hasError = true;
      }
      root.appService.isLoading = false;
    }, 4000);
  }
}
