import {Component, Input} from '@angular/core';
import {CarouselItem} from "../../../interfaces/carousel-item";
import {LanguageSwitcherService} from "../../../services/languageSwitcherService/language-switcher.service";
import {Locales} from "../../../interfaces/enums/locales";

import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  chevronLeft = faChevronLeft;
  chevronRight = faChevronRight;

  @Input() carouselData !: CarouselItem[];
  selected: number = 0;

  constructor(
    private languageSwitcherService: LanguageSwitcherService
  ) { }

  /**
   * Returns the title of the given item in the current locale
   * @param item
   */
  getItemTitle(item: CarouselItem): string {
    switch (this.languageSwitcherService.getCurrentLocale()) {
      case Locales.fr_FR: return item.title.fr;
      case Locales.en_US: return item.title.en;
      // Default to fr_FR locale
      default: return item.title.en;
    }
  }

  incrementSelected(): void {
    this.selected = Math.min(this.selected + 1, this.carouselData.length - 1);
  }

  decrementSelected(): void {
    this.selected = Math.max(this.selected - 1, 0);
  }
}
