import { TestBed } from '@angular/core/testing';

import { MyServiesService } from './my-servies.service';

describe('MyServiesService', () => {
  let service: MyServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
