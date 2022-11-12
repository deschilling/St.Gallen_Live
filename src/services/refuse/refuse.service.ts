import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class RefuseService {
  private url = 'https://daten.stadt.sg.ch/api/records/1.0/search/?dataset=abfuhrdaten-stadt-stgallen&q=&facet=gebiets_id&facet=gebietsbezeichnung&facet=sammlung&facet=datum&facet=strasse&refine.datum=2022%2F11%2F14';
   
  constructor(private httpClient: HttpClient) { }
  
  getRefuseData(){
    return this.httpClient.get(this.url);
  }
  
}