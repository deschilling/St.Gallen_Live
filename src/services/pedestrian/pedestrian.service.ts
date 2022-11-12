import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedestrianService{

  private url = 'https://stadt-stgallen.opendatasoft.com/api/records/1.0/search/?dataset=fussganger-stgaller-innenstadt-vadianstrasse&q=&rows=1&sort=measured_at&facet=measured_at&facet=datum_tag&facet=tag_nr&facet=wochentag&facet=arbeitstag';
   
  constructor(private httpClient: HttpClient) {}

  getPedestrianData(){
    return this.httpClient.get(this.url);
  }
}
