import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from "@angular/material/dialog";
import { LoanDetailsomponent } from 'src/app/loan-details/loan-details.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(
        private appService: AppService,
        public dialog: MatDialog,
    ) { }

    public years: Array<number> = [
        2018,
        2019,
        2020,
        2021
    ];
    public selectedLocation: string = "";

    public locations: Array<string> = [
        "Texas"
    ];

    public ngOnInit(): void {
        this.appService.pageTitle = "Dashboard";
    }

    public importLoan(): void {
        
    }

    public scroll(): void {
        if (this.selectedLocation == "Texas") {
            var test = document.getElementById("my-image");
            if (test) {
                test.style.top = "-410px"
            }
        }
    }

    public displayLoanDetails(): void {
        const dialogRef = this.dialog.open(LoanDetailsomponent);
    }
    
}
