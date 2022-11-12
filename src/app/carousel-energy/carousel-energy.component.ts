import { Component, OnInit } from '@angular/core';
import { EnergyService } from 'src/services/energy/energy.service';

@Component({
  selector: 'app-carousel-energy',
  templateUrl: './carousel-energy.component.html',
  styleUrls: ['./carousel-energy.component.css']
})
export class CarouselEnergyComponent{

  energyProduced: number;

  constructor(private energyService: EnergyService) {}

  ngOnInit(): void {
    this.energyService.getEnergyData()
    .subscribe({
      next: (v: any) => {
        let energyProduced = 0;
        console.log(v.records);
        for(let i = 0; i < v.records.length; i++){
          energyProduced += v.records[i].fields.activepower;
        }
        this.energyProduced = Math.floor(energyProduced*-1);
        console.log(this.energyProduced);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }
  
}
