import { TestBed } from '@angular/core/testing';

import { TapasService } from './tipos.service';

describe('TapasService', () => {
  let service: TapasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TapasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
