import { Injectable } from '@angular/core';
import type { Theme } from './types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('light');

  theme$ = this.themeSubject.asObservable();

  constructor() {}

  setTheme(theme: Theme) {
    this.themeSubject.next(theme);
  }

  toggleTheme() {
    this.themeSubject.next(
      this.themeSubject.value === 'dark' ? 'light' : 'dark'
    );
  }
}
