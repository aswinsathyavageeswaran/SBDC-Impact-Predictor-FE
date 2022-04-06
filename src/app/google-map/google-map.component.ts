import { MapsAPILoader } from "@agm/core";
import { Component, ElementRef, NgZone, ViewChild } from "@angular/core";
import * as $ from 'jquery';
import 'jqueryui';

@Component({
  selector: "google-map",
  templateUrl: "./google-map.component.html",
  styleUrls: ["./google-map.component.scss"]
})
export class GoogleMapComponent {
  public latitude!: number;
  public longitude!: number;
  public zoom!: number;

  @ViewChild('search')
  public searchElementRef!: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }


  public ngOnInit(): void {
    setTimeout(() => {
      $("#my-image").css({ top: 0, left: 0});
  
      var maskWidth = $("#my-mask").width();
      var maskHeight = $("#my-mask").height();
      var imgPos = $("#my-image").offset();
      var imgWidth = $("#my-image").width();
      var imgHeight = $("#my-image").height();
  
      if (imgPos && maskHeight && maskWidth && imgHeight && imgWidth) {
        var x1 = (imgPos.left + maskWidth) - imgWidth;
        var y1 = (imgPos.top + maskHeight) - imgHeight;
        var x2 = imgPos.left;
        var y2 = imgPos.top;
        $("#my-image").draggable({ 
          containment: [x1, y1, x2, y2],
        });
        $("#my-image").css({ cursor: 'pointer' });
      }
    }, 500);
    // this.zoom = 1;
    // //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    // });
  }  

  public onMapClicked(event: any): void {
    console.table(event.coords);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
}