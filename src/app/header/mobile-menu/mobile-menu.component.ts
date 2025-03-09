import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, links } from '../../model/Link';
import { LinkComponent } from '../link/link.component';
import { MobileLinkDropdownComponent } from '../mobile-link-dropdown/mobile-link-dropdown.component';

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule, FontAwesomeModule, LinkComponent, MobileLinkDropdownComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent implements OnInit {
  faBars = faBars;
  showMenu = false;
  links: Link[];
  childFunction!: Function;

  constructor() {
    this.links = links;
  }

  ngOnInit(): void {
      this.childFunction = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (!this.showMenu) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    this.showMenu = !this.showMenu;
  }
}
