import { Component } from "@angular/core";
import { GoogleChartInterface, GoogleChartType } from "ng2-google-charts";

@Component({
    selector: "pie-chart",
    templateUrl: "./pie-chart.component.html",
    styleUrls: ["./pie-chart.component.scss"]
  })
  export class PieChartComponent {
  
      constructor(
    ) { }
  
    public pieChart: GoogleChartInterface = {
        chartType: GoogleChartType.PieChart,
        dataTable: [
          ['Type','Percentage of Business'],
          ['Women or Minority Owned', 60],
          ['Other', 40],
        ],
        
        options: { colors: ['#3366cc', '#e7711b'],
        legend: {position: 'bottom'},
        titlePosition: 'none',
     },
      };

  }