import { TestBed, inject } from '@angular/core/testing';

import { GetvmService } from './getvm.service';

describe('GetvmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetvmService]
    });
  });

  it('should be created', inject([GetvmService], (service: GetvmService) => {
    expect(service).toBeTruthy();
  }));
});
