import { TestBed } from '@angular/core/testing';

import { PgmcourseserviceService } from './pgmcourseservice.service';

describe('PgmcourseserviceService', () => {
  let service: PgmcourseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgmcourseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
