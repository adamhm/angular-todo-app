import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../theme.service';

import { CheckboxComponent } from '../checkbox/checkbox.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [AsyncPipe, CheckboxComponent],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss',
})
export class TextboxComponent {
  constructor(
    public themeService: ThemeService,
    private todoService: TodoService
  ) {}

  addTodo(task: string) {
    this.todoService.addTodo(task);
  }
}
