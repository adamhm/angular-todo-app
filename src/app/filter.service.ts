import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { Todo } from './types';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject = new BehaviorSubject<FilterSelector>('all');

  currentFilter$ = this.filterSubject.asObservable();

  getCurrentFilter() {
    return this.filterSubject.value;
  }

  setCurrentFilter(filter: FilterSelector) {
    this.filterSubject.next(filter);
  }

  filter(todos: Todo[], filter: FilterSelector) {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
}

export type FilterSelector = 'all' | 'active' | 'completed';
