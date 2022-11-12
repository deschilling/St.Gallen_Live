import { Component, OnInit } from '@angular/core';
import { PedestrianService } from 'src/services/pedestrian/pedestrian.service';

@Component({
  selector: 'app-carousel-pedestrian',
  templateUrl: './carousel-pedestrian.component.html',
  styleUrls: ['./carousel-pedestrian.component.css']
})
export class CarouselPedestrianComponent implements OnInit {

  sum: number;
  directionMultergasse: number;
  directionNeumarkt: number;
  measuredAt: string;
  rand: number;
  
  constructor(private pedestrianService: PedestrianService) {}

  ngOnInit(): void {
    this.pedestrianService.getPedestrianData()
    .subscribe({
      next: (v: any) => {
        console.log(v.records);
        this.sum = v.records[0].fields.summe;
        this.directionMultergasse = v.records[0].fields.data_left;
        this.directionNeumarkt = v.records[0].fields.data_right;
        this.measuredAt = v.records[0].fields.measured_at;
        this.rand = Math.round(Math.random());
        console.log(this.rand);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }

}
