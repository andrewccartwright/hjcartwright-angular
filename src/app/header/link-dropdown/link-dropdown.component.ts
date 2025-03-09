import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-link-dropdown',
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './link-dropdown.component.html',
  styleUrl: './link-dropdown.component.scss'
})
export class LinkDropdownComponent {
  @ViewChild('dropdownMenu') dropdownMenu: any;

  isHovering: boolean = false;

  selected  = new FormControl('More');

  onLeave() {
    setTimeout(() => {
      this.isHovering = false;
    }, 250);
  }
}
