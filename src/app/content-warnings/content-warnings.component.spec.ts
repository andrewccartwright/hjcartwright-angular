import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWarningsComponent } from './content-warnings.component';

describe('ContentWarningsComponent', () => {
  let component: ContentWarningsComponent;
  let fixture: ComponentFixture<ContentWarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentWarningsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
