import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ThemeService } from './theme.service';
import { TodoPanelComponent } from './todo-panel/todo-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, TodoPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-todo-app';

  constructor(public themeService: ThemeService) {}
}
