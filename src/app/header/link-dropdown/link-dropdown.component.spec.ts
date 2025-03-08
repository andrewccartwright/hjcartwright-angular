import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDropdownComponent } from './link-dropdown.component';

describe('LinkDropdownComponent', () => {
  let component: LinkDropdownComponent;
  let fixture: ComponentFixture<LinkDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
