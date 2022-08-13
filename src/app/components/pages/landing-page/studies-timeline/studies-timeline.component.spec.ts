import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesTimelineComponent } from './studies-timeline.component';

describe('StudiesTimelineComponent', () => {
  let component: StudiesTimelineComponent;
  let fixture: ComponentFixture<StudiesTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
