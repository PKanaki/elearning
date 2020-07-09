import { TestBed } from '@angular/core/testing';

import { TcardService } from './tcard.service';

describe('TcardService', () => {
  let service: TcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
