import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from '../theme.service';
import type { FilterSelector } from '../filter.service';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-list-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-filter.component.html',
  styleUrl: './list-filter.component.scss',
})
export class ListFilterComponent {
  constructor(
    public themeService: ThemeService,
    public filterService: FilterService
  ) {}

  changeFilter(filter: FilterSelector) {
    this.filterService.setCurrentFilter(filter);
  }
}
