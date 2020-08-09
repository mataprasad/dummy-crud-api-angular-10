import { TestBed } from '@angular/core/testing';

import { EbsService } from './ebs.service';

describe('EbsService', () => {
  let service: EbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
