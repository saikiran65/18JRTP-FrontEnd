import { TestBed } from '@angular/core/testing';

import { AppregService } from './appreg.service';

describe('AppregService', () => {
  let service: AppregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
