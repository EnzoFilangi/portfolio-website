import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianGalleryComponent } from './asian-gallery.component';

describe('AsianGalleryComponent', () => {
  let component: AsianGalleryComponent;
  let fixture: ComponentFixture<AsianGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsianGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsianGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
