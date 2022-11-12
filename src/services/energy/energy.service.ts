import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnergyService{

  private url = 'https://daten.stadt.sg.ch/api/records/1.0/search/?dataset=aktuelle-stromproduktion-der-solaranlagen-der-stgaller-stadtwerke&q=&facet=name&facet=modultyp&facet=leistung_modul_in_wp';
   
  constructor(private httpClient: HttpClient) {}

  getEnergyData(){
    return this.httpClient.get(this.url);
  }
}
