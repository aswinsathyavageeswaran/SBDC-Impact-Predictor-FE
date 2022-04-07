import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'cost-projection',
  templateUrl: './cost-projection.component.html',
  styleUrls: ['./cost-projection.component.scss']
})
export class CostProjectionComponent implements OnInit {
    
    public defaultTime: number = 2;
    public trainingTime: number = 5;
    public costPerHour: number = 20;
    public totalEstimatedTimeToCollectData: number = 0;
    public totalTimeForReporting: number = 0;
    public totalCostPerson: number = 0;


    public enableSubmit: boolean = true;

    constructor(private appService: AppService) {
        this.appService.pageTitle = "Cost Projection";   
    }

    public ngOnInit(): void {
        
    }

    public calculate(): void {
        this.totalEstimatedTimeToCollectData = this.appService.totalNumberofSBCLoans * this.defaultTime;
        this.totalTimeForReporting = this.appService.totalNumberofSBCLoans * 10;
        this.totalCostPerson = this.trainingTime * this.costPerHour;
    }
}
