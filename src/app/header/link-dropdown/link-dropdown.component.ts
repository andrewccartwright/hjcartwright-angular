import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-link-dropdown',
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './link-dropdown.component.html',
  styleUrl: './link-dropdown.component.scss'
})
export class LinkDropdownComponent {
  @ViewChild('dropdown') dropdownMenu: any;

  isHovering: boolean = false;

  selected  = new FormControl('MORE');

  onLeave() {
    if (this.dropdownMenu.panelOpen) {
      return;
    }
    this.isHovering = false;
  }
}
