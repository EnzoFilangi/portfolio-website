import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  readonly minScreenHeight: number = 750;
  shadowStarts: number = 150;
  scrollAnimationEnabled: boolean = true;

  @ViewChild('navbar') navbar!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  applyShadowOnScroll() {
    if (this.scrollAnimationEnabled){
      if (window.scrollY > this.shadowStarts){
        this.navbar.nativeElement.classList.add('small-bottom-shadow')
      } else {
        this.navbar.nativeElement.classList.remove('small-bottom-shadow')
      }
    }
  }

  constructor() {
    // If on mobile, we want the shadow to always be present as we don't have enough vertical space to play with animating it
    // This doesn't refresh if the window changes height after load, but realistically this will almost never happen and
    // even if it does, the animation is not critical.
    if (window.innerHeight < this.minScreenHeight){
      this.shadowStarts = -100;
      this.scrollAnimationEnabled = false;
    }
  }

  ngAfterViewInit(): void {
    // Don't wait for the user to start scrolling
    if (window.innerHeight < this.minScreenHeight) {
      this.navbar.nativeElement.classList.add('small-bottom-shadow')
    }
  }



}
