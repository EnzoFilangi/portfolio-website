import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceListComponent } from './professional-experience-list.component';

describe('ProfessionalExperienceListComponent', () => {
  let component: ProfessionalExperienceListComponent;
  let fixture: ComponentFixture<ProfessionalExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalExperienceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
