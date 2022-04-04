import { MapsAPILoader } from "@agm/core";
import { Component, ElementRef, NgZone, ViewChild} from "@angular/core";

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
      this.zoom = 1;
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
      });
    }
  
    public onMapClicked(event: any): void{
      console.table(event.coords);
      this.latitude = event.coords.lat;
      this.longitude = event.coords.lng;
    }
  }