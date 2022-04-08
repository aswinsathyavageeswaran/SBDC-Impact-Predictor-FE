import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatDialog } from "@angular/material/dialog";
import { LoanDetailPopComponent } from 'src/app/loan-details/loan-details.component';

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
    public loanDetails!: Array<any>;
    public commercialLoanCount!: number;
    public smallBusinessLoanCount!: number;

    public ngOnInit(): void {
        this.appService.isLoading = true;
        var root = this;
        setTimeout(() => {
            root.appService.isLoading = false;
        }, 2000);
        this.appService.pageTitle = "Dashboard";
        this.getLoanDetails();
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
        const dialogRef = this.dialog.open(LoanDetailPopComponent, {
            data: this.loanDetails
        });
    }

    private getLoanDetails(): void {
        var year = 2021;
        var place = "California";
        this.appService.getLoanDetails(year, place).subscribe(
            (loanDetails: Array<any>) => {
                if (loanDetails) {

                    this.loanDetails = loanDetails;
                    
                    this.loanDetails.map(loan =>{
                        loan.creditTypeName = this.getCreditTypeName(loan.CreditType);
                    });
                    this.commercialLoanCount = this.loanDetails.length;
                    this.smallBusinessLoanCount = this.loanDetails.filter(loan => loan.MinorityOwned).length;

                }
            }
        );
    }

    public getCreditTypeName(creditType: any): string {
        switch (creditType) {
            case 0:
                return "TermLoanUnsecured";
            case 1:
                return "TermLoanSecured";
            case 2:
                return "LineOfCreditUnsecured";
            case 3:
                return "LineOfCreditSecured";
            case 4:
                return "CreditCard";
            case 5:
                return "MerchantCashAdvance";
            case 6:
                return "OtherSalesBasedFinancingTransaction";
            case 7:
                return "Other";
            default:
                return ""
        }
    }
    
}
