import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTaxComponent } from './carousel-tax.component';

describe('CarouselTaxComponent', () => {
  let component: CarouselTaxComponent;
  let fixture: ComponentFixture<CarouselTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
