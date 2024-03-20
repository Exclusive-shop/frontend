import { Routes } from '@angular/router';

// Components
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    title: 'Home',
    path: 'home',
    component: HomePageComponent,
  },
];
