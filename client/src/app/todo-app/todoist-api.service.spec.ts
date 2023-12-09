import { TestBed } from '@angular/core/testing';

import { TodoistApiService } from './todoist-api.service';

describe('TodoistApiService', () => {
  let service: TodoistApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
