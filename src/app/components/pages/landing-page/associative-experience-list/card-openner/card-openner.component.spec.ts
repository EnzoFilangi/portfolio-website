import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpennerComponent } from './card-openner.component';

describe('CardOpennerComponent', () => {
  let component: CardOpennerComponent;
  let fixture: ComponentFixture<CardOpennerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOpennerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOpennerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
