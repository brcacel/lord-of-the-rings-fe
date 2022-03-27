import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharcterService } from './charcter.service';

describe('CharcterService', () => {
  let service: CharcterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(CharcterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
