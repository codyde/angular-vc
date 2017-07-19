import { TestBed, inject } from '@angular/core/testing';

import { NsxwireService } from './nsxwire.service';

describe('NsxwireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NsxwireService]
    });
  });

  it('should be created', inject([NsxwireService], (service: NsxwireService) => {
    expect(service).toBeTruthy();
  }));
});
