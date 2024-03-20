import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-scroll-buttons',
  standalone: true,
  imports: [NgClass],
  templateUrl: './scroll-buttons.component.html',
  styleUrl: './scroll-buttons.component.scss',
})
export class ScrollButtonsComponent {
  @Input() isLeftEnabled: boolean = true;
  @Input() isRightEnabled: boolean = true;

  @Output() left: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() right: EventEmitter<undefined> = new EventEmitter<undefined>();

  public onLeftClick() {
    if (this.isLeftEnabled) {
      this.left.emit();
    }
  }

  public onRightClick() {
    if (this.isRightEnabled) {
      this.right.emit();
    }
  }
}
