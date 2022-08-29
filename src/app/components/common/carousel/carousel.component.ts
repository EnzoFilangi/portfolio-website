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

  @Input() activateFullSizeImages: boolean = true;
  @Input() carouselData !: CarouselItem[];
  selected: number = 1;

  isAnimating: boolean = false;
  animationReset: number | null = null;

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

  /**
   * Trigger the animations and move the slides
   */
  incrementSelected(): void {
    this.triggerAnimations(() => this.selected = Math.min(this.selected + 1, this.carouselData.length - 1));
  }

  /**
   * Trigger the animations and move the slides
   */
  decrementSelected(): void {
    this.triggerAnimations(() => this.selected = Math.max(this.selected - 1, 0));
  }

  /**
   * Navigate to a specific slide, without animation
   * @param circleI
   */
  navigateToSlide(circleI: number) {
    this.selected = circleI;
  }

  /**
   * Activates the styles for the previous and next slides, and calls the given callback after the styles have been applied.
   *
   * The classes are applied only if this.isAnimating is true. Therefore, before calling the callback, we set this property to true.
   * Then, we wait for 500ms before setting it to false. This is done to avoid cutting the animation midway.
   *
   * We keep track of the timeout to remove the classes in this.animationReset, if this is still set when an animation
   * is triggered, we clear this timeout to prevent it from triggering midway through another animation.
   * @param callback
   */
  triggerAnimations(callback: Function): void {
    if (this.animationReset) {
      clearTimeout(this.animationReset);
      this.animationReset = null;
    }
    this.isAnimating = true;
    setTimeout(callback, 10);
    this.animationReset = setTimeout(() => this.isAnimating = false, 500);
  }

  currentFullsizeImage: HTMLImageElement | null = null;
  /**
   * This method is used to make an image grow to its full size when clicking on it
   * if the image isn't currently already full size.
   *
   * This function does nothing if this.activateFullSizeImages is false
   * @param carouselImage
   * @param imageContainerIndex
   */
  makeFullSize(carouselImage: HTMLImageElement, imageContainerIndex: number) {
    // We check that the clicked image is different from the currently displayed image
    // to prevent it from being dismissed and then grown again
    if (this.activateFullSizeImages && this.currentFullsizeImage != carouselImage && imageContainerIndex === this.selected){
      // Wait a few ms to avoid any possible race condition with the previous image
      setTimeout(() => {
        carouselImage.classList.remove('duration-100', 'hover:scale-105');
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
      this.currentFullsizeImage.classList.add('duration-100', 'hover:scale-105');
      this.currentFullsizeImage = null;
    }
  }
}
