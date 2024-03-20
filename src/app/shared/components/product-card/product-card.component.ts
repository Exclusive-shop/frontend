import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe, NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  public readonly COUNT_STARS: number = 5;
  public _countStars: number[] = [0, 0, 0, 0, 0];

  @Input() price: number = 0;
  @Input() oldPrice: number = 0;

  @Input() discount: number = 0;
  @Input() isNew: boolean = false;

  @Input() set countActiveStars(rawCountStars: number) {
    let countStars: number = rawCountStars;

    if (rawCountStars > 5) {
      this._countStars = Array(5).fill(1);
      return;
    }

    if (rawCountStars % 1) {
      countStars = Math.round(rawCountStars);
    }

    this._countStars = [
      ...Array(countStars).fill(1),
      ...Array(this.COUNT_STARS - countStars).fill(0),
    ];
  }

  @Input() countReviews: number = 0;
  @Input() productImage: string =
    'https://miro.medium.com/v2/resize:fit:720/format:webp/0*IQj_MIVMDJkTDNjB';

  @Output() heart: EventEmitter<string> = new EventEmitter<string>();
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();

  onHeartClick() {
    this.heart.emit();
  }

  onAddToCartClick() {
    this.addToCart.emit();
  }
}
