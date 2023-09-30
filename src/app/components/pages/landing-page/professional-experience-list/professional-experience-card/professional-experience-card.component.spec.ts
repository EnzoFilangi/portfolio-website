import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceCardComponent } from './professional-experience-card.component';

describe('ProfessionalExperienceCardComponent', () => {
  let component: ProfessionalExperienceCardComponent;
  let fixture: ComponentFixture<ProfessionalExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalExperienceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
