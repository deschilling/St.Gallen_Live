import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingService{

  private url = 'https://daten.stadt.sg.ch/api/records/1.0/search/?dataset=freie-parkplatze-in-der-stadt-stgallen-pls&q=&facet=phid&facet=phname&facet=phstate';
   
  constructor(private httpClient: HttpClient) {}

  getParkingData(){
    return this.httpClient.get(this.url);
  }
}
