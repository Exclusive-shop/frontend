import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() search: string = '';

  public onInput(searchText: string) {
    this.searchChange.emit(searchText);
  }
}
