import {AfterContentInit, Component, ContentChildren, HostListener, QueryList} from '@angular/core';
import {CardOpennerComponent} from "../card-openner/card-openner.component";

@Component({
  selector: 'app-association-stack',
  templateUrl: './association-stack.component.html',
  styleUrls: ['./association-stack.component.css']
})
export class AssociationStackComponent implements AfterContentInit {

  @ContentChildren(CardOpennerComponent) cards!: QueryList<CardOpennerComponent>;

  private movementEnabled: boolean = true

  constructor() { }

  ngAfterContentInit(): void {
    // The interface wouldn't be useable on mobile, so disable all movement
    if (this.getScreenWidth() < 1280) {
      this.cards.forEach(card => card.movementEnabled = false)
      this.movementEnabled = false;
      return;
    }

    // Otherwise, only disable the card at the top of the stack
    this.cards.last.movementEnabled = false; // Target the last element declared in the HTML since it's the one that appears on top
    this.triggerDefaultRotation();
  }

  @HostListener('mouseleave')
  triggerDefaultRotation(): void {
    this.tiltCardsBy(3);
  }

  @HostListener('mouseenter')
  triggerAccentuatedRotation(): void {
    this.tiltCardsBy(5);
  }

  private tiltCardsBy(degree: number): void {
    if (!this.movementEnabled) return;
    this.cards.forEach(
      (card, index) => card.tiltCard((this.cards.length - index - 1) * degree)
    )
  }

  private getScreenWidth() {
    return window.innerWidth;
  }
}
