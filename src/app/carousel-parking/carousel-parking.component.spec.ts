import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselParkingComponent } from './carousel-parking.component';

describe('ParkingComponent', () => {
  let component: CarouselParkingComponent;
  let fixture: ComponentFixture<CarouselParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselParkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
