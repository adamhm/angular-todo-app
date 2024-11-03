import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from '../theme.service';
import { TodoService } from '../todo.service';
import { BetterTodoService } from '../better-todo.service';
import { TodoElementComponent } from '../todo-element/todo-element.component';
import type { Todo } from '../types';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoElementComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  // providers: [{ provide: TodoService, useExisting: BetterTodoService }],
})
export class TodoListComponent {
  readonly maxVisibleItems: number = 6;

  constructor(
    public themeService: ThemeService,
    public todoService: TodoService
  ) {}
}
