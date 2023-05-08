import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationStackComponent } from './association-stack.component';

describe('AssociationStackComponent', () => {
  let component: AssociationStackComponent;
  let fixture: ComponentFixture<AssociationStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
