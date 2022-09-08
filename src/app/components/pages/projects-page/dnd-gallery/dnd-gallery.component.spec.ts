import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndGalleryComponent } from './dnd-gallery.component';

describe('DndGalleryComponent', () => {
  let component: DndGalleryComponent;
  let fixture: ComponentFixture<DndGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DndGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
