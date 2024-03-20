import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalProductBannerComponent } from './promotional-product-banner.component';

describe('PromotionalProductBannerComponent', () => {
  let component: PromotionalProductBannerComponent;
  let fixture: ComponentFixture<PromotionalProductBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionalProductBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionalProductBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
