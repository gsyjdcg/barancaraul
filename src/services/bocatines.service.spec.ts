import { TestBed } from '@angular/core/testing';

import { BocatinesService } from './bocatines.service';

describe('BocatinesService', () => {
  let service: BocatinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BocatinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
