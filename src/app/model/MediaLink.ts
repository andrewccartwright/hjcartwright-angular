import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF, faGoodreadsG, faInstagram, faTiktok, faPinterestP, faAmazon } from '@fortawesome/free-brands-svg-icons';

export type MediaLink = {
    faIcon: IconDefinition;
    href: string;
}

export const socialMediaLinks: MediaLink[] = [
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