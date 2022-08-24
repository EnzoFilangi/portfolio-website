import {Injectable} from '@angular/core';
import {Locales} from "../../interfaces/enums/locales";
import {PlatformLocation} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LanguageSwitcherService {

  constructor(
    private platformLocation: PlatformLocation,
    private router: Router
  ) { }

  /**
   * Returns true if the current local is the one stored in localStorage, false otherwise
   *
   * Also returns true if no prefered language is specified as any language will suffice
   */
  isCurrentLocaleDesired(): boolean {
    const desiredLocale = localStorage.getItem('language');
    if (!desiredLocale) return true;
    return desiredLocale === this.getCurrentLocale();
  }

  /**
   * Changes the current page to be in the language stored in localStorage
   */
  navigateToDesiredLocale(){
    if (!this.isCurrentLocaleDesired()){
      this.router.events.subscribe((routerData) => {
        if (routerData instanceof NavigationEnd){
          this.changeLocale(localStorage.getItem('language') as Locales);
        }
      })
    }
  }

  /**
   * Parses the base href to return a locale.
   *
   * Defaults to french if the locale cannot be identified.
   */
  getCurrentLocale() : Locales {
    switch (this.platformLocation.getBaseHrefFromDOM()){
      case '/fr/' : return Locales.fr_FR
      case '/en/' : return Locales.en_US
      default     : return Locales.fr_FR
    }
  }

  /**
   * Replaces the base href of the current URL to the one given as parameter and navigates to the new url.
   *
   * Also stores the locale choice, so it can be remembered next visit.
   * @param targetLocale
   */
  changeLocale(targetLocale: Locales) {
    localStorage.setItem('language', targetLocale);

    const currentRoute = this.router.url;
    location.replace(`/${targetLocale}${currentRoute}`);
  }
}
