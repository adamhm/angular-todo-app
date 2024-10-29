import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import data from './data/todos.json';
import type { Todo } from './types';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>(data);

  private todos$ = this.todosSubject.asObservable();

  private filterService: FilterService = inject(FilterService);

  filteredTodos$ = combineLatest([
    this.todos$,
    this.filterService.currentFilter$,
  ]).pipe(map(([todos, filter]) => this.filterService.filter(todos, filter)));

  getTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  getTodoById(id: number): Readonly<Todo> | undefined {
    return this.todosSubject.value.find((todo) => todo.id === id);
  }

  addTodo(task: string) {
    const todos = this.todosSubject.value;

    this.todosSubject.next([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        task: task.trim(),
        completed: false,
      },
    ]);
  }

  removeTodo(id: number) {
    const todos = this.todosSubject.value;

    todos.splice(
      todos.findIndex((todo) => todo.id === id),
      1
    );

    this.todosSubject.next(todos);
  }

  clearCompletedTodos() {
    const todos = this.todosSubject.value;
    this.todosSubject.next([...todos.filter((todo) => !todo.completed)]);
  }

  setCompleted(id: number, completed: boolean) {
    const todos = this.todosSubject.value;

    todos[todos.findIndex((todo) => todo.id === id)].completed =
      Boolean(completed);
    this.todosSubject.next([...todos]);
  }
}
