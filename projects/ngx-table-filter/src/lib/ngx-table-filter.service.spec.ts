import { TestBed } from '@angular/core/testing';

import { NgxTableFilterService } from './ngx-table-filter.service';

describe('NgxTableFilterService', () => {
  let service: NgxTableFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTableFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
