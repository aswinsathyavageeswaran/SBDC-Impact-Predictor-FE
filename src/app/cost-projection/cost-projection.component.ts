import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'cost-projection',
  templateUrl: './cost-projection.component.html',
  styleUrls: ['./cost-projection.component.scss']
})
export class CostProjectionComponent implements OnInit {
    
    public sbdcTimePerLoan: number = 0;
    public numberofEmployees: number = 0;
    public annualTrainingTime: number = 0;
    public sbdcDataReportingTime: number = 0;
    public loanCount: number = 0;
    public costPerHour: number = 20;

    public totalEstimatedTimeToCollectData: number = 0;
    public totalTimeForReporting: number = 0;
    public totalCostPerson: number = 0;

    public totalCostToTheBank: number = 0;


    public enableSubmit: boolean = true;

    constructor(private appService: AppService) {
        this.appService.pageTitle = "Cost Projection";   
    }

    public ngOnInit(): void {
        this.appService.isLoading = true;
        var root = this;
        setTimeout(() => {
            root.appService.isLoading = false;
        }, 2000);
        this.calculate();
    }

    public calculate(): void {
        this.appService.totalNumberofSBCLoans = 50;
        this.appService.isLoading = true;
        var root = this;
        setTimeout(() => {
            root.appService.isLoading = false;
        }, 2000);
        this.totalEstimatedTimeToCollectData = this.appService.totalNumberofSBCLoans * this.sbdcTimePerLoan;
        this.totalTimeForReporting = this.appService.totalNumberofSBCLoans * this.sbdcDataReportingTime;
        this.totalCostPerson = this.annualTrainingTime * this.costPerHour;

        this.totalCostToTheBank = this.totalCostPerson * this.numberofEmployees;
    }
}
