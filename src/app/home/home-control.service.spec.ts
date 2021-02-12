import { TestBed } from '@angular/core/testing';

import { HomeControlService } from './home-control.service';

describe('HomeControlService', () => {
  let service: HomeControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
