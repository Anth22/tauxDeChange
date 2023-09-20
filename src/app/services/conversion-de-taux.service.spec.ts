import { TestBed } from '@angular/core/testing';

import { ConversionDeTauxService } from './conversion-de-taux.service';

describe('ConversionDeTauxService', () => {
  let service: ConversionDeTauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionDeTauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
