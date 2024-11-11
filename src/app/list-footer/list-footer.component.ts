import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from '../theme.service';
import { TodoService } from '../todo.service';
import { FilterService } from '../filter.service';
import { ListFilterComponent } from '../list-filter/list-filter.component';

@Component({
  selector: 'app-list-footer',
  standalone: true,
  imports: [CommonModule, ListFilterComponent],
  templateUrl: './list-footer.component.html',
  styleUrl: './list-footer.component.scss',
})
export class ListFooterComponent {
  constructor(
    public themeService: ThemeService,
    public todoService: TodoService,
    public filterService: FilterService
  ) {}

  clearCompleted() {
    this.todoService.clearCompletedTodos();
  }
}
