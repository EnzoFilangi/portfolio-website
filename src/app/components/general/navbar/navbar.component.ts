import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

import { faBars, faUser, faBriefcase, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import {LanguageSwitcherService} from "../../../services/languageSwitcherService/language-switcher.service";
import {Locales} from "../../../interfaces/enums/locales";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit {

  locales = Locales;

  hamburgerMenuIcon = faBars;
  skillsIcon = faCrosshairs;
  projectsIcon = faBriefcase;
  meIcon = faUser;

  readonly minScreenHeight: number = 800;
  shadowStarts: number = 150;
  scrollAnimationEnabled: boolean = true;

  isNavigationMenuVisible: boolean = false;

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('navigationMenu') navigationMenu!: ElementRef;
  @ViewChild('navigationMenuButton') navigationMenuButton!: ElementRef;

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

  constructor(
    public languageSwitcher: LanguageSwitcherService
  ) {
    // If on mobile, we want the shadow to always be present as we don't have enough vertical space to play with animating it
    // This doesn't refresh if the window changes height after load, but realistically this will almost never happen and
    // even if it does, the animation is not critical.
    if (window.innerHeight < this.minScreenHeight){
      this.shadowStarts = -100;
      this.scrollAnimationEnabled = false;
    }
  }

  ngOnInit(): void {
    // Navigate to the user's desired locale if this one isn't the right one
    this.languageSwitcher.navigateToDesiredLocale();
  }

  ngAfterViewInit(): void {

    // Don't wait for the user to start scrolling
    if (window.innerHeight < this.minScreenHeight) {
      this.navbar.nativeElement.classList.add('small-bottom-shadow')
    }
  }

  /**
   * Toggles the navigation menu on (visible) or off (hidden)
   */
  toggleNavigationMenu() {
    if (this.isNavigationMenuVisible){
      this.isNavigationMenuVisible = false;
      this.navigationMenu.nativeElement.classList.add('hidden');
    } else {
      this.isNavigationMenuVisible = true;
      this.navigationMenu.nativeElement.classList.remove('hidden');
    }
  }

  /**
   * Hides the popup menu when clicking anywhere on the screen expect on the menu button itself
   * @param target
   */
  @HostListener('document:click', ['$event.target'])
  hideNavigationMenu(target: Element) {
    // Check that the target of the click isn't contained in the button
    if (!this.navigationMenuButton.nativeElement.contains(target)) {
      this.isNavigationMenuVisible = false;
      this.navigationMenu.nativeElement.classList.add('hidden');
    }
  }
}
