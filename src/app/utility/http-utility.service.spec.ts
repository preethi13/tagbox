import { TestBed } from '@angular/core/testing';

import { HttpUtilityService } from './http-utility.service';

describe('HttpUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpUtilityService = TestBed.get(HttpUtilityService);
    expect(service).toBeTruthy();
  });
});
