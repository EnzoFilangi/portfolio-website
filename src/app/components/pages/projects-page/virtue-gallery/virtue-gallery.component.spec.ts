import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtueGalleryComponent } from './virtue-gallery.component';

describe('VirtueGalleryComponent', () => {
  let component: VirtueGalleryComponent;
  let fixture: ComponentFixture<VirtueGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtueGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtueGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
