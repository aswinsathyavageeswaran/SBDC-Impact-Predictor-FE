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
    public selectedYear: any = 2021;
    public showResult: boolean = false;

    public locations: Array<string> = [
        "Texas",
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ];

    public loanDetails!: Array<any>;
    public commercialLoanCount!: number;
    public smallBusinessLoanCount!: number;

    public ngOnInit(): void {
        this.appService.pageTitle = "Dashboard";
    }

    public importLoan(): void {
        this.getLoanDetails();
    }

    public scroll(): void {
        this.appService.isLoading = true;
        if (this.selectedLocation == "Texas") {
            var test = document.getElementById("my-image");
            if (test) {
                test.style.top = "-410px"
            }
        }
        this.getLoanDetails();
    }

    public yearChanged(): void {

    }

    public goToCalculationPage(): void {
        //this.appService.totalNumberofSBCLoans = 
        this.router.navigateByUrl("main/costprojection");
    }
    public displayLoanDetails(totalLoans: boolean): void {
        let loanList = [];
        if (totalLoans) {
            loanList = this.loanDetails;
        }
        else {
            loanList = this.loanDetails.filter(loan => loan.MinorityOwned)
        }
        const dialogRef = this.dialog.open(LoanDetailPopComponent, {
            data: loanList
        });
    }

    private getLoanDetails(): void {
        this.appService.isLoading = true;
        var year = 2021;
        var place = "Texas";
        this.appService.getLoanDetails(year, place)
        .subscribe(
            (loanDetails: Array<any>) => {
                this.appService.isLoading = false;
                this.showResult = true;
                this.appService.totalNumberofSBCLoans = loanDetails.filter(l => l.MinorityOwned).length;
                if (loanDetails) {
                    this.loanDetails = loanDetails;
                    this.loanDetails.map(loan => {
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
