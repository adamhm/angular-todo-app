import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import type { Todo } from '../types';
import { ThemeService } from '../theme.service';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-element',
  standalone: true,
  imports: [AsyncPipe, CheckboxComponent],
  templateUrl: './todo-element.component.html',
  styleUrl: './todo-element.component.scss',
})
export class TodoElementComponent {
  @Input() todo!: Todo;

  constructor(
    public themeService: ThemeService,
    private todoService: TodoService
  ) {}

  handleChange(checked: boolean) {
    this.todoService.setCompleted(this.todo.id, checked);
  }

  removeTodo() {
    this.todoService.removeTodo(this.todo.id);
  }
}
