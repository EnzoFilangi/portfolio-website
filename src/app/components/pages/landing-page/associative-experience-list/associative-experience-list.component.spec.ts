import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociativeExperienceListComponent } from './associative-experience-list.component';

describe('AssociativeExperienceListComponent', () => {
  let component: AssociativeExperienceListComponent;
  let fixture: ComponentFixture<AssociativeExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociativeExperienceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociativeExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
