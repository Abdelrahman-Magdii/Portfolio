import { TestBed } from '@angular/core/testing';

import { GitProjectsService } from './git-projects.service';

describe('GitProjectsService', () => {
  let service: GitProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
