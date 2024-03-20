import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonData } from '../../../core/interfaces/button';
import { BUTTON_SIZE, BUTTON_TYPE } from '../../../core/enums/button';
import { COUNTDOWN_TIMER_TYPE } from '../../../core/enums/countdown-timer';

@Component({
  selector: 'app-promotional-product-banner',
  standalone: true,
  imports: [CountdownTimerComponent, ButtonComponent],
  templateUrl: './promotional-product-banner.component.html',
  styleUrl: './promotional-product-banner.component.scss',
})
export class PromotionalProductBannerComponent {
  protected readonly COUNTDOWN_TIMER_TYPE = COUNTDOWN_TIMER_TYPE;
  protected readonly buyButtonData: ButtonData = {
    size: BUTTON_SIZE.MEDIUM,
    type: BUTTON_TYPE.GREEN,
  };

  @Input() name!: string;
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() endDate: Date = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);

  @Output() buy: EventEmitter<void> = new EventEmitter();

  onBuyClick() {
    this.buy.emit();
  }
}
