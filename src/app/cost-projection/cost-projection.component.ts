import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'cost-projection',
  templateUrl: './cost-projection.component.html',
  styleUrls: ['./cost-projection.component.scss']
})
export class CostProjectionComponent implements OnInit {
    
    public sbdcTimePerLoan: number = 30;
    public numberofEmployees: number = 10;
    public annualTrainingTime: number = 5;
    public sbdcDataReportingTime: number = 30;
    public loanCount: number = 0;
    public costPerHour: number = 30;

    public totalEstimatedTimeToCollectData: number = 0;
    public totalTimeForReporting: number = 0;
    public totalCostPerson: number = 0;

    public totalCostToTheBank: number = 0;
    
    public totalCostPerLoan: number = 0;
    public totalCostForAllLoans: number = 0;
    public trainingCostPerEmployee: number = 0;
    public totalTraningCost: number = 0;
    public totalCostForReportingPrep: number = 0;
    public totalAnnualCost: number = 0;


    public enableSubmit: boolean = true;

    constructor(private appService: AppService) {
        this.appService.pageTitle = "Cost Projection";   
    }

    public ngOnInit(): void {
        // this.appService.isLoading = true;
        // var root = this;
        // setTimeout(() => {
        //     root.appService.isLoading = false;
        // }, 2000);
        this.loanCount = this.appService.totalNumberofSBCLoans;
        this.calculate();
    }

    public calculate(): void {
        this.appService.isLoading = true;
        var root = this;
        setTimeout(() => {
            root.appService.isLoading = false;
        }, 2000);

        this.totalEstimatedTimeToCollectData = this.loanCount * (this.sbdcTimePerLoan / 60);
        this.totalTimeForReporting = this.loanCount * this.sbdcDataReportingTime;
        this.totalCostPerson = this.annualTrainingTime * this.costPerHour;
        this.totalCostToTheBank = this.totalCostPerson * this.numberofEmployees;
        
        this.totalCostPerLoan = Math.round((this.sbdcTimePerLoan / 60) * this.costPerHour);
        this.totalCostForAllLoans = Math.round(this.totalCostPerLoan * this.loanCount);
        this.trainingCostPerEmployee = Math.round(this.annualTrainingTime * this.costPerHour);
        this.totalTraningCost = Math.round(this.numberofEmployees * this.trainingCostPerEmployee);
        this.totalCostForReportingPrep = this.sbdcDataReportingTime * this.costPerHour;

        this.totalAnnualCost = this.totalCostPerLoan + this.totalCostForAllLoans + this.trainingCostPerEmployee + this.totalTraningCost + this.totalCostForReportingPrep;

        this.totalEstimatedTimeToCollectData = Math.round(this.totalEstimatedTimeToCollectData);
        this.totalTimeForReporting = Math.round(this.totalTimeForReporting);
        this.totalCostPerson = Math.round(this.totalCostPerson * 100) / 100;
        this.totalCostToTheBank = Math.round(this.totalCostToTheBank * 100) / 100;
    
    }

    public clear(): void{
     this.sbdcTimePerLoan = 0;
     this.numberofEmployees = 0;
     this.annualTrainingTime = 0;
     this.sbdcDataReportingTime = 0;
     this.loanCount = 0;
     this.costPerHour = 0;
     this.totalEstimatedTimeToCollectData = 0;
     this.totalTimeForReporting = 0;
     this.totalCostPerson = 0;
     this.totalCostToTheBank = 0;
    }
}
