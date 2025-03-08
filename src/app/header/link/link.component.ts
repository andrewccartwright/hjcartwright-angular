import { Component, Input } from '@angular/core';
import { Link } from '../../model/Link';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() link!: Link
}
