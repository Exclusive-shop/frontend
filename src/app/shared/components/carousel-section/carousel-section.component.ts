import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ButtonComponent } from '../button/button.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ScrollButtonsComponent } from '../scroll-buttons/scroll-buttons.component';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { CarouselConfiguration } from '../../../core/interfaces/carousel';

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [
    ProductCardComponent,
    ScrollButtonsComponent,
    SectionHeaderComponent,
    ButtonComponent,
    NgStyle,
    SlickCarouselModule,
  ],
  templateUrl: './carousel-section.component.html',
  styleUrl: './carousel-section.component.scss',
})
export class CarouselSectionComponent {
  protected readonly SLIDER_ANIMATION_SPEED: number = 300;

  @Input() sectionName: string = '';
  @Input() sectionTitle: string = '';
  @Input() endDate: Date = new Date(0);

  @Input() carouselConfig: CarouselConfiguration = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    speed: this.SLIDER_ANIMATION_SPEED,
    responsive: [
      {
        breakpoint: 1162,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 884,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 606,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
}
