import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRelocationComponent } from './carousel-relocation.component';

describe('CarouselRelocationComponent', () => {
  let component: CarouselRelocationComponent;
  let fixture: ComponentFixture<CarouselRelocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselRelocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselRelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
