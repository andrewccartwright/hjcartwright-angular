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
        href: 'https://www.instagram.com/hjcartwrightauthor/',
        faIcon: faInstagram
      },
      {
        href: 'https://www.facebook.com/profile.php?id=61556437804008',
        faIcon: faFacebookF
      },
      {
        href: 'https://www.goodreads.com/author/show/48357303.H_J_Cartwright',
        faIcon: faGoodreadsG
      },
      {
        href: 'https://www.tiktok.com/@hjcartwrightauthor?lang=en',
        faIcon: faTiktok
      },
      {
        href: 'https://www.pinterest.com/hjcartwrightauthor/',
        faIcon: faPinterestP
      }
    ]
  }
}
