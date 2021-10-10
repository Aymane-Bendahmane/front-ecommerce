import { TestBed } from '@angular/core/testing';

import { RecServiceService } from './rec-service.service';

describe('RecServiceService', () => {
  let service: RecServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
