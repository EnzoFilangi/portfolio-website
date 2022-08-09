import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() shadowStarts: number = 150;

  @ViewChild('navbar') navbar!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  applyShadowOnScroll() {
    if (window.scrollY > this.shadowStarts){
      this.navbar.nativeElement.classList.add('small-bottom-shadow')
    } else {
      this.navbar.nativeElement.classList.remove('small-bottom-shadow')
    }
  }

  constructor() {
  }

}
