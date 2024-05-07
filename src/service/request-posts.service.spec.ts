import { TestBed } from '@angular/core/testing';

import { RequestPostsService } from './request-posts.service';

describe('RequestPostsService', () => {
  let service: RequestPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
