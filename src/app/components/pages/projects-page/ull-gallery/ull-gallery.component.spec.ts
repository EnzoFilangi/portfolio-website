import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UllGalleryComponent } from './ull-gallery.component';

describe('UllGalleryComponent', () => {
  let component: UllGalleryComponent;
  let fixture: ComponentFixture<UllGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UllGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UllGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
