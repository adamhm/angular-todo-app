// This class is for testing only!

import { Injectable } from '@angular/core';
import type { Todo } from './types';

@Injectable({
  providedIn: 'root',
})
export class BetterTodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      { id: 1, task: 'Testing a new service', completed: true },
      { id: 2, task: 'Go Home', completed: false },
    ];
  }

  getTodos(): ReadonlyArray<Todo> {
    return this.todos;
  }

  getTodoById(id: number): Readonly<Todo> | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  addTodo(task: string) {
    this.todos.push({
      id: this.todos[this.todos.length - 1].id + 1,
      task,
      completed: false,
    });
  }

  removeTodo(id: number) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === id),
      1
    );
  }

  clearTodos() {
    this.todos = [];
  }

  setCompleted(id: number, completed: boolean) {
    this.todos[this.todos.findIndex((todo) => todo.id === id)].completed =
      completed;
  }
}
