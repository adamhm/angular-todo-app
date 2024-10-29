import { TestBed } from '@angular/core/testing';

import { BetterTodoService } from './better-todo.service';

describe('BetterTodoService', () => {
  let service: BetterTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetterTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
