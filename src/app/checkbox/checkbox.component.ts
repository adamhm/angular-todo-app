import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() checked: boolean = false;

  @Input() disabled: boolean = false;

  @Input() labelId?: string;

  @Output() checkedChange = new EventEmitter<boolean>();

  constructor(public themeService: ThemeService) {}

  handleChange(checked: boolean) {
    this.checkedChange.emit(checked);
  }
}
