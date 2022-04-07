import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    public user: any = {
        name: "Bob",
        password: "password"
    };

    public bankUser: any = {
        name: "ABCBank",
        password: "password"
    }

    public pageTitle: string = "";

    public isLoading: boolean = false;

    public cycleNumber: number = 1;

    constructor(
        private httpClient: HttpClient
    ) {}

    public getWeatherData(): Observable<any> {
        return this.httpClient.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/348755?apikey=VuZRr74Nj6mYLOcYxlm74DhRSQmj8Z9a");
    }

    public getAccountDetails(): Observable<any> {
        return this.httpClient.get("http://localhost:57969/account/account-details/01010OA00P200");
    }
}