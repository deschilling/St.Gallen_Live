import { Component, OnInit } from '@angular/core';
import { ParkingService } from 'src/services/parking/parking.service';

@Component({
  selector: 'app-carousel-parking',
  templateUrl: './carousel-parking.component.html',
  styleUrls: ['./carousel-parking.component.css']
})
export class CarouselParkingComponent{

  percentageOccupied: number;

  constructor(private parkingService: ParkingService) {}

  ngOnInit(): void {
    this.parkingService.getParkingData()
    .subscribe({
      next: (v: any) => {
        let occupied = 0;
        let max = 0;
        for(let i = 0; i < v.records.length; i++){
          occupied += v.records[i].fields.shortoccupied;
          max += v.records[i].fields.shortmax;
        }
        this.percentageOccupied = Math.floor(occupied/max*100);
        console.log(this.percentageOccupied);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }
  
}
