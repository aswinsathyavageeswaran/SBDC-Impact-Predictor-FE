import { AfterViewInit, Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppService } from "../app.service";

@Component({
    selector: "loan-details",
    templateUrl: "./loan-details.component.html",
    styleUrls: ["./loan-details.component.scss"]
})
export class LoanDetailPopComponent implements OnInit {
    public displayedColumns: Array<string> = ['creditTypeName', 'AmountApplied', 'AmountApproved', 'ActionTakenDate', 'Status'];
    constructor(public appService: AppService,
        @Inject(MAT_DIALOG_DATA) public loanDetails: Array<any>,
        public dialogRef: MatDialogRef<LoanDetailPopComponent>,) {

    }
    public ngOnInit(): void {
    }


    public close(): void {
        this.dialogRef.close(false);
      }
}