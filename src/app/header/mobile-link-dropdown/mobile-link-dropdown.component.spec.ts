import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLinkDropdownComponent } from './mobile-link-dropdown.component';

describe('MobileLinkDropdownComponent', () => {
  let component: MobileLinkDropdownComponent;
  let fixture: ComponentFixture<MobileLinkDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileLinkDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileLinkDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
