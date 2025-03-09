import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LinkComponent } from './link/link.component';
import { Link, links } from '../model/Link';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinkDropdownComponent } from './link-dropdown/link-dropdown.component';
import { SocialMediaLinkComponent } from './social-media-link/social-media-link.component';
import { MediaLink, socialMediaLinks } from '../model/MediaLink';
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, LinkComponent, LinkDropdownComponent, 
    SocialMediaLinkComponent, RouterModule, FontAwesomeModule, 
    MobileMenuComponent, MatDividerModule, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  selectOption = 'MORE';

  links: Link[] = [];
  socialMediaLinks: MediaLink[] = [];

  ngOnInit() {
    this.links = links;
    this.socialMediaLinks = socialMediaLinks;
  }
}
