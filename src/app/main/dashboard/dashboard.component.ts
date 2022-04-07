import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor() { }

    public years: Array<number> = [
        2018,
        2019,
        2020,
        2021
    ];

    public ngOnInit(): void {

    }
}
