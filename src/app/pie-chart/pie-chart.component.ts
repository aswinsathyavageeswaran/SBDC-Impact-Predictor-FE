import { Component, OnInit } from "@angular/core";
import { GoogleChartInterface, GoogleChartType } from "ng2-google-charts";

@Component({
  selector: "pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.scss"]
})
export class PieChartComponent implements OnInit {
  public data: Array<any> = [];
  constructor(
  ) { }

  // public pieChart: GoogleChartInterface = {
  //     chartType: GoogleChartType.PieChart,
  //     dataTable: [
  //       ['Type','Percentage of Business'],
  //       ['Women or Minority Owned', 60],
  //       ['Other', 40],
  //     ],

  //     options: { colors: ['#3366cc', '#e7711b'],
  //     legend: {position: 'bottom'},
  //     titlePosition: 'none',
  //  },
  //   };
  public ngOnInit(): void {

    this.data = [
      { Value: 15, Label: "Women / Minority Owned", Summary: "15%", color: "#8B5BB1"},
      { Value: 45, Label: "Male Owned", Summary: "45%", color: "#EE5879" },
      { Value: 40, Label: "Others", Summary: "40%", color: "#F8A15F"}
    ];
  }

  public chartSliceClickEvent(e: any): void {
    // e.args.isExploded = !e.args.isExploded;
  }

}