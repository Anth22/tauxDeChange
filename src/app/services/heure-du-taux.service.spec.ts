import { TestBed } from '@angular/core/testing';

import { HeureDuTauxService } from './heure-du-taux.service';

describe('HeureDuTauxService', () => {
  let service: HeureDuTauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeureDuTauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
