import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getWeeksBetween() should return the correct number of weeks', () => {
    const originalDate = new Date("2021/04/19Z+2");

    expect(component.getWeeksBetween(originalDate, originalDate)).toEqual(0);
    expect(component.getWeeksBetween(originalDate, new Date("2021/04/26Z+2"))).toEqual(1);
    expect(component.getWeeksBetween(originalDate, new Date("2022/04/19Z+2"))).toEqual(52);
    expect(component.getWeeksBetween(originalDate, new Date("2022/08/26Z+2"))).toEqual(70);
    expect(component.getWeeksBetween(originalDate, new Date("2022/08/28Z+2"))).toEqual(70);
    expect(component.getWeeksBetween(originalDate, new Date("2022/08/29Z+2"))).toEqual(71);
    expect(component.getWeeksBetween(originalDate, new Date("2022/08/30Z+2"))).toEqual(71);

    expect(component.getWeeksBetween(new Date("2021/04/24Z+2"), new Date("2022/09/03Z+2"))).toEqual(71);
  })
});
