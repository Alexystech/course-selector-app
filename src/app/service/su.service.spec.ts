import { TestBed } from '@angular/core/testing';

import { SuService } from './su.service';

describe('SuService', () => {
  let service: SuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
