import { TestBed } from '@angular/core/testing';

import { BaseServiesService } from './base-servies.service';

describe('BaseServiesService', () => {
  let service: BaseServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
