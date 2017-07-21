import { TestBed, inject } from '@angular/core/testing';

import { CountryStateService } from './country-state.service';

describe('CountryStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryStateService]
    });
  });

  it('should ...', inject([CountryStateService], (service: CountryStateService) => {
    expect(service).toBeTruthy();
  }));
});
