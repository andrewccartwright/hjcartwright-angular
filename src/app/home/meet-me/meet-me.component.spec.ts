import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetMeComponent } from './meet-me.component';

describe('MeetMeComponent', () => {
  let component: MeetMeComponent;
  let fixture: ComponentFixture<MeetMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
