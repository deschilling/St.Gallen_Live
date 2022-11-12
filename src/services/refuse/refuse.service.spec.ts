import { TestBed } from '@angular/core/testing';

import { RefuseService } from './refuse.service';

describe('RefuseService', () => {
  let service: RefuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
