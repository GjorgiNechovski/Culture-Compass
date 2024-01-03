import { TestBed } from '@angular/core/testing';

import { FilterQueryFactoryService } from './filter-query-factory.service';

describe('FilterQueryFactoryService', () => {
  let service: FilterQueryFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterQueryFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
