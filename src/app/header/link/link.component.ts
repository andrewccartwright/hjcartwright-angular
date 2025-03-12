import { Component, Input } from '@angular/core';
import { Link } from '../../model/Link';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link',
  imports: [RouterModule, CommonModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() link!: Link
}
