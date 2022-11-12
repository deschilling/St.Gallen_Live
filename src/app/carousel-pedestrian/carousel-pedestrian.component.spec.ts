import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPedestrianComponent } from './carousel-pedestrian.component';

describe('CarouselPedestrianComponent', () => {
  let component: CarouselPedestrianComponent;
  let fixture: ComponentFixture<CarouselPedestrianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPedestrianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPedestrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
