import type { Todo } from '../types';

export type FilterSelector = 'all' | 'active' | 'completed';

export interface TodoFilter {
  selector: FilterSelector;

  filter(todos: Todo[]): ReadonlyArray<Todo>;
}

export class AllFilter implements TodoFilter {
  selector: FilterSelector = 'all';

  filter(todos: Todo[]): ReadonlyArray<Todo> {
    return todos;
  }
}

export class ActiveFilter implements TodoFilter {
  selector: FilterSelector = 'active';

  filter(todos: Todo[]): ReadonlyArray<Todo> {
    return todos.filter((todo) => !todo.completed);
  }
}

export class CompletedFilter implements TodoFilter {
  selector: FilterSelector = 'completed';

  filter(todos: Todo[]): ReadonlyArray<Todo> {
    return todos.filter((todo) => todo.completed);
  }
}
