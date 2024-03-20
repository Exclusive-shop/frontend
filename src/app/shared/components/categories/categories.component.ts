import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categories } from '../../../core/interfaces/category';

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  @Input() categories: Categories = [];

  public _onSelect(category: string) {
    this.onSelect.emit(category);
  }
}
