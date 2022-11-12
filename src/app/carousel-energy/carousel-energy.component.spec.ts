import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEnergyComponent } from './carousel-energy.component';

describe('CarouselEnergyComponent', () => {
  let component: CarouselEnergyComponent;
  let fixture: ComponentFixture<CarouselEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
