import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LinkComponent } from './link/link.component';
import { Link } from '../model/Link';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faGoodreadsG, faInstagram, faTiktok, faPinterestP, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { LinkDropdownComponent } from './link-dropdown/link-dropdown.component';
import { SocialMediaLinkComponent } from './social-media-link/social-media-link.component';
import { MediaLink } from '../model/MediaLink';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LinkComponent, LinkDropdownComponent, SocialMediaLinkComponent, RouterModule, FontAwesomeModule, MatDividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  selectOption = 'MORE';

  faFacebookF = faFacebookF;
  links: Link[] = [];
  socialMediaLinks: MediaLink[] = [];

  ngOnInit() {
    this.links =  [
      {
        id: 'home',
        path: '/',
        text: 'HOME'
      },
      {
        id: 'books',
        path: '/books',
        text: 'BOOKS'
      },
      {
        id: 'about',
        path: '/about',
        text: 'ABOUT'
      },
      {
        id: 'shop',
        path: '/shop',
        text: 'SHOP'
      }
    ]

    this.socialMediaLinks = [
      {
        href: 'https://www.facebook.com/hjcartwright',
        faIcon: faFacebookF
      },
      {
        href: 'https://www.goodreads.com/author/show/48357303.H_J_Cartwright',
        faIcon: faGoodreadsG
      },
      {
        href: 'https://www.instagram.com/hjcartwright/',
        faIcon: faInstagram
      },
      {
        href: 'https://www.tiktok.com/@hjcartwright',
        faIcon: faTiktok
      },
      {
        href: 'https://www.pinterest.com/hjcartwright',
        faIcon: faPinterestP
      },
      {
        href: 'https://www.amazon.com/stores/author/B0CVR6T3YC?ingress=0&visitId=dca68d10-7463-4ac6-b6d1-cfd2db04a78c',
        faIcon: faAmazon
      }

    ]
  }
}
