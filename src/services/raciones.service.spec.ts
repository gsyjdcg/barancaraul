import { TestBed } from '@angular/core/testing';

import { RacionesService } from './raciones.service';

describe('RacionesService', () => {
  let service: RacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
