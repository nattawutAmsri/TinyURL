import { TestBed, inject } from '@angular/core/testing';

import { TinyurlService } from './tinyurl.service';

describe('TinyurlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TinyurlService]
    });
  });

  it('should be created', inject([TinyurlService], (service: TinyurlService) => {
    expect(service).toBeTruthy();
  }));
});
