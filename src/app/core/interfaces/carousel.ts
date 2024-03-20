export interface CarouselConfiguration {
  accessibility?: boolean;
  adaptiveHeight?: boolean;
  arrows?: boolean;
  asNavFor?: any;
  prevArrow?: string;
  nextArrow?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  centerMode?: boolean;
  centerPadding?: string;
  cssEase?: string;
  customPaging?: string;
  dots?: boolean;
  dotsClass?: string;
  draggable?: boolean;
  easing?: string;
  edgeFriction?: number;
  fade?: boolean;
  focusOnSelect?: boolean;
  focusOnChange?: boolean;
  infinite?: boolean;
  initialSlide?: number;
  lazyLoad?: string;
  mobileFirst?: boolean;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  pauseOnDotsHover?: boolean;
  respondTo?: string;
  responsive?: ResponsiveCarouselConfiguration[];
  rows?: number;
  rtl?: boolean;
  slide?: string;
  slidesToShow?: number;
  slidesPerRow?: number;
  slidesToScroll?: number;
  speed?: number;
  swipe?: boolean;
  swipeToSlide?: boolean;
  touchMove?: boolean;
  touchThreshold?: number;
  useCSS?: boolean;
  useTransform?: boolean;
  variableWidth?: boolean;
  vertical?: boolean;
  verticalSwiping?: boolean;
  waitForAnimate?: boolean;
  zIndex?: number;
}

interface ResponsiveCarouselConfiguration {
  breakpoint: number;
  settings: CarouselConfiguration;
}
