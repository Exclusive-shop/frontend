import { Component } from '@angular/core';
import { CATEGORY } from '../../../core/enums/category';
import { Categories } from '../../../core/interfaces/category';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { SectionLabelComponent } from '../../components/section-label/section-label.component';
import { ScrollButtonsComponent } from '../../components/scroll-buttons/scroll-buttons.component';
import { CountdownTimerComponent } from '../../components/countdown-timer/countdown-timer.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CarouselSectionComponent } from '../../components/carousel-section/carousel-section.component';
import { PromotionalProductBannerComponent } from '../../components/promotional-product-banner/promotional-product-banner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CategoriesComponent,
    SectionLabelComponent,
    ScrollButtonsComponent,
    CountdownTimerComponent,
    SectionHeaderComponent,
    ProductCardComponent,
    CarouselSectionComponent,
    PromotionalProductBannerComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public readonly categories: Categories = [
    {
      id: CATEGORY.WOMEN_FASHION,
      name: 'Women’s Fashion',
      menu: [],
    },
    {
      id: CATEGORY.MEN_FASHION,
      name: 'Men’s Fashion',
      menu: [],
    },
    {
      id: CATEGORY.ELECTRONICS,
      name: 'Electronics',
    },
    {
      id: CATEGORY.HOME_AND_LIFESTYLE,
      name: 'Home & Lifestyle',
    },
    {
      id: CATEGORY.MEDICINE,
      name: 'Medicine',
    },
    {
      id: CATEGORY.SPORTS_AND_OUTDOOR,
      name: 'Sports & Outdoor',
    },
    {
      id: CATEGORY.BABY_AND_TOYS,
      name: 'Baby’s & Toys',
    },
    {
      id: CATEGORY.GROCERIES_AND_PETS,
      name: 'Groceries & Pets',
    },
    {
      id: CATEGORY.HEALTH_AND_BEAUTY,
      name: 'Health & Beauty',
    },
  ];

  public onCategorySelect(categoryId: string | CATEGORY) {
    console.log('Selected category id:', categoryId);
  }
}
