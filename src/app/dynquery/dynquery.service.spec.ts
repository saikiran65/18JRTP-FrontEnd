import { TestBed } from '@angular/core/testing';

import { DynqueryService } from './dynquery.service';

describe('DynqueryService', () => {
  let service: DynqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
