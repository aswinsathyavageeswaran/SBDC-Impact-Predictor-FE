import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginComponent {
  public username: string = "";
  public password: any = "";
  public hasError: boolean = false;
  private user: any;


  public redirectToReg(): void {
    // this.router.navigateByUrl("/register");
  }

  public signIn(): void {
    // this.appService.isLoading = true;
    // var root = this;
    // setTimeout(() => {
    //   if (root.username == root.user.name && root.password == root.user.password) {
    //     root.router.navigateByUrl("/dashboard");
    //   }
    //   else if (root.username == root.appService.bankUser.name && root.password == root.appService.bankUser.password) {
    //     root.router.navigateByUrl("/bank");
    //   }
    //   else {
    //     root.hasError = true;
    //   }
    //   root.appService.isLoading = false;
    // }, 2000);
  }


}
