import {Component, HostListener, Input} from '@angular/core';
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

  currentFullsizeImage: HTMLImageElement | null = null;
  /**
   * This method is used to make an image grow to its full size when clicking on it
   * @param carouselImage
   */
  makeFullSize(carouselImage: HTMLImageElement) {
    // We checke that the clicked image is different from the currently displayed image
    // to prevent it from being dismissed and then grown again
    if (this.currentFullsizeImage != carouselImage){
      // Wait a few ms to avoid any possible race condition with the previous image
      setTimeout(() => {
        carouselImage.classList.add('full-size');
        this.currentFullsizeImage = carouselImage;
      }, 10)
    }
  }

  /**
   * Makes the current full size image go back to its normal size when clicking anywhere or scrolling
   */
  @HostListener('document:click')
  @HostListener('document:scroll')
  dismissFullSizeImage() {
    // Check that the target of the click isn't contained in the button
    if (this.currentFullsizeImage) {
      this.currentFullsizeImage.classList.remove('full-size');
      this.currentFullsizeImage = null;
    }
  }
}
