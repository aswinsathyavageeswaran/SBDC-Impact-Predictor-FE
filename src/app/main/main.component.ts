import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
      public appService: AppService
  ) { 
      this.appService.pageTitle = "Dashboard";
  }
}
