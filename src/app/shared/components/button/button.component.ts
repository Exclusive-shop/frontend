import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { BUTTON_SIZE, BUTTON_TYPE } from '../../../core/enums/button';
import { ButtonData } from '../../../core/interfaces/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonData: ButtonData = {
    type: BUTTON_TYPE.RED,
    size: BUTTON_SIZE.LARGE,
  };
}
