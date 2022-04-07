import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { AppService } from "../app.service";
import { CreditType } from "../Helpers/credit-type.enum";

@Component({
    selector: "loan-details",
    templateUrl: "./loan-details.component.html",
    styleUrls: ["./loan-details.component.scss"]
})
export class LoanDetailsomponent implements OnInit {
    public loanDetails!: Array<any>;
    public displayedColumns: Array<string> = ['creditTypeName', 'AmountApplied', 'AmountApproved', 'ActionTakenDate', 'Status'];
    //public displayedColumns: Array<string> = ['Credit Type', 'Amount Applied', 'Amount Approved', 'Action Taken Date', 'Status'];
    //public displayedColumns: Array<string> = ['Credit Type', 'Amount Applied', 'Amount Approved', 'Action Taken Date', 'Status'];
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    dataSource = new MatTableDataSource<any>([]);
    constructor(public appService: AppService,
        public dialogRef: MatDialogRef<LoanDetailsomponent>,) {

    }
    public ngOnInit(): void {
        this.getLoanDetails();
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
                    })
                    this.dataSource = new MatTableDataSource<any>(this.loanDetails);
                    this.dataSource.paginator = this.paginator;
                    console.log("loan details", this.loanDetails);
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
    public close(): void {
        this.dialogRef.close(false);
      }
}