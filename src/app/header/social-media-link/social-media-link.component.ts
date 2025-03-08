import { Component, Input } from '@angular/core';
import { MediaLink } from '../../model/MediaLink';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-social-media-link',
  imports: [FontAwesomeModule],
  templateUrl: './social-media-link.component.html',
  styleUrl: './social-media-link.component.scss'
})
export class SocialMediaLinkComponent {
  @Input() link!: MediaLink;
}
