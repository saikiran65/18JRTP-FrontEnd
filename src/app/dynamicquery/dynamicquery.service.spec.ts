import { TestBed } from '@angular/core/testing';

import { DynamicqueryService } from './dynamicquery.service';

describe('DynamicqueryService', () => {
  let service: DynamicqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
