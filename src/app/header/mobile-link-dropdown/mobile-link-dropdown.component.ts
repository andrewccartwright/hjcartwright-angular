import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { LinkComponent } from '../link/link.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-link-dropdown',
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './mobile-link-dropdown.component.html',
  styleUrls: ['./mobile-link-dropdown.component.scss', '../mobile-menu/mobile-menu.component.scss']
})
export class MobileLinkDropdownComponent {
  @Input() toggleMenu!: Function;

  faCaretRight = faCaretRight;
  faCaretDown = faCaretDown;

  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
