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
    public loanDetails!: Array<any>;
    public commercialLoanCount!: number;
    public smallBusinessLoanCount!: number;

    public ngOnInit(): void {
        this.appService.pageTitle = "Dashboard";
        this.getLoanDetails();
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
        const dialogRef = this.dialog.open(LoanDetailsomponent, {
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
