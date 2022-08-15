import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-associative-experience-list',
  templateUrl: './associative-experience-list.component.html',
  styleUrls: ['./associative-experience-list.component.css']
})
export class AssociativeExperienceListComponent {

  constructor() {}

  @ViewChild('fapCard') fapCard!: ElementRef;

  openedCard: HTMLDivElement | null = null;
  /**
   * Adds a class that makes the given element translate right, and removes the one that nudges it on hover.
   *
   * This method also stores the reference to close that card later, and closes any previously opened card.
   * @param eventManagerCard
   */
  openCard(eventManagerCard: HTMLDivElement) {
    if (this.openedCard){
      this.closeCard(this.openedCard);
    }

    this.openedCard = eventManagerCard;
    eventManagerCard.classList.add("translated-right");
    eventManagerCard.classList.remove("open-slightly");
  }

  /**
   * Removes the class that translates a card, and adds back the class that nudges it on hover.
   * @param openedCard
   * @private
   */
  private closeCard(openedCard: HTMLDivElement) {
    openedCard.classList.remove("translated-right")
    openedCard.classList.add("open-slightly")
  }

  /**
   * If there is a card open, hide it when clicking anywhere else
   * @param target
   */
  @HostListener('document:click', ['$event.target'])
  hideNavigationMenu(target: Element) {
    // Check that the target of the click isn't contained in the button
    if (!this.fapCard.nativeElement.contains(target) && this.openedCard) {
      this.closeCard(this.openedCard)
      this.openedCard = null;
    }
  }

  /**
   * If there is a card open, hide it when scrolling
   */
  @HostListener('window:scroll', ['$event'])
  applyShadowOnScroll() {
    if (this.openedCard) {
      this.closeCard(this.openedCard)
      this.openedCard = null;
    }
  }
}
