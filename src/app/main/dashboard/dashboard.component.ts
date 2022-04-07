import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(
        private appService: AppService
    ) { }

    public years: Array<number> = [
        2018,
        2019,
        2020,
        2021
    ];

    public ngOnInit(): void {

    }

    public importLoan(): void {
        this.appService.mapImagName$.next("newyork_business.PNG")
    }
}
