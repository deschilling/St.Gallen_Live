import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRefuseComponent } from './carousel-refuse.component';

describe('CarouselRefuseComponent', () => {
  let component: CarouselRefuseComponent;
  let fixture: ComponentFixture<CarouselRefuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselRefuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
