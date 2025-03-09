import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, links } from '../../model/Link';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule, FontAwesomeModule, LinkComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  faBars = faBars;
  showMenu = false;
  links: Link[];

  constructor() {
    this.links = links;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
