import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselQuizComponent } from './carousel-quiz.component';

describe('CarouselQuizComponent', () => {
  let component: CarouselQuizComponent;
  let fixture: ComponentFixture<CarouselQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
