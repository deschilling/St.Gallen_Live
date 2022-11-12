import { TestBed } from '@angular/core/testing';

import { PedestrianService } from './pedestrian.service';

describe('PedestrianService', () => {
  let service: PedestrianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedestrianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
