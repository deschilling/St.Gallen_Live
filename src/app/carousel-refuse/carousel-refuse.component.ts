import { Component, OnInit } from '@angular/core';
import { RefuseService } from 'src/services/refuse/refuse.service';

@Component({
  selector: 'app-carousel-refuse',
  templateUrl: './carousel-refuse.component.html',
  styleUrls: ['./carousel-refuse.component.css']
})
export class CarouselRefuseComponent implements OnInit {

  record: any;

  constructor(private refuseService: RefuseService) { }

  ngOnInit(): void {
    this.refuseService.getRefuseData()
    .subscribe({
      next: (v: any) => {
        let rand = Math.floor(Math.random() * v.records.length-1) + 1;
        this.record = v.records[rand];
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }
}
