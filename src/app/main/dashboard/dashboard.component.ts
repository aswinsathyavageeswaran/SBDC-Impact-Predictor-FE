import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        private router: Router,
        public dialog: MatDialog,
    ) { }

    public years: Array<number> = [
        2018,
        2019,
        2020,
        2021
    ];
    public selectedLocation: string = "";
    public selectedYear: any = 0;
    public showResult: boolean = false;

    public locations: Array<string> = [
        "Texas"
    ];

    public ngOnInit(): void {
        this.appService.isLoading = true;
        var root = this;
        setTimeout(() => {
            root.appService.isLoading = false;
        }, 2000);
        this.appService.pageTitle = "Dashboard";
    }

    public importLoan(): void {
        
    }

    public scroll(): void {
        this.appService.isLoading = true;
        var root = this;
        setTimeout(() => {
            root.appService.isLoading = false;
            root.showResult = true;
        }, 2000);
        if (this.selectedLocation == "Texas") {
            var test = document.getElementById("my-image");
            if (test) {
                test.style.top = "-410px"
            }
        }
    }

    public yearChanged(): void {

    }

    public goToCalculationPage(): void {
        //this.appService.totalNumberofSBCLoans = 
        this.router.navigateByUrl("main/costprojection");
    }    
    public displayLoanDetails(): void {
        const dialogRef = this.dialog.open(LoanDetailsomponent);
    }
    
}
