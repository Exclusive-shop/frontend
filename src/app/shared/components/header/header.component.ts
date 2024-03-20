import { Component } from '@angular/core';
import { Menu } from '../../../core/interfaces/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SearchComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public readonly menu: Menu = [
    {
      id: 1,
      name: 'Home',
      link: 'home',
    },
    {
      id: 2,
      name: 'Contact',
      link: 'contact',
    },
    {
      id: 3,
      name: 'About',
      link: 'about',
    },
    {
      id: 4,
      name: 'Sign Up',
      link: 'authorization/sign-up',
    },
  ];
}
