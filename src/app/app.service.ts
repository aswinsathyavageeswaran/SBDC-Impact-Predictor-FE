import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

    public mapImagName$: BehaviorSubject<string> = new BehaviorSubject("Atlanta_business.PNG");

    public pageTitle: string = "";

    public isLoading: boolean = false;

    public cycleNumber: number = 1;

    public totalNumberofSBCLoans: number = 0;

    constructor(
        private httpClient: HttpClient
    ) {}
}