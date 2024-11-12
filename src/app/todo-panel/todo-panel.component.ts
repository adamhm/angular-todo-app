import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from '../theme.service';
import { TextboxComponent } from '../textbox/textbox.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { ListFooterComponent } from '../list-footer/list-footer.component';

@Component({
  selector: 'app-todo-panel',
  standalone: true,
  imports: [
    CommonModule,
    ListFooterComponent,
    TextboxComponent,
    TodoListComponent,
  ],
  templateUrl: './todo-panel.component.html',
  styleUrl: './todo-panel.component.scss',
})
export class TodoPanelComponent {
  constructor(public themeService: ThemeService) {}
}
