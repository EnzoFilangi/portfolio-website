import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostListener, Input,
  OnChanges,
  QueryList,
  SimpleChanges
} from '@angular/core';
import {CardOpennerComponent} from "../card-openner/card-openner.component";

@Component({
  selector: 'app-association-stack',
  templateUrl: './association-stack.component.html',
  styleUrls: ['./association-stack.component.css']
})
export class AssociationStackComponent implements AfterContentInit, OnChanges {

  @ContentChildren(CardOpennerComponent) cards!: QueryList<CardOpennerComponent>;

  @Input() enableStack: boolean = true;

  private movementEnabled: boolean = true
  private contentInitialized: boolean = false;

  constructor() { }

  ngAfterContentInit(): void {
    this.contentInitialized = true;
    this.refreshStack()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['enableStack'];
    if (change.previousValue !== change.currentValue){
      this.refreshStack();
    }
  }

  private refreshStack() {
    if (!this.contentInitialized) return;

    if (this.enableStack) {
      // Only disable the card at the top of the stack if the stack is enabled
      this.cards.forEach(card => card.movementEnabled = true) // Reset all cards
      this.cards.last.movementEnabled = false; // Target the last element declared in the HTML since it's the one that appears on top
      this.movementEnabled = true;
      this.triggerDefaultRotation();
      return;
    }

    // Otherwise, disable all cards
    this.cards.forEach(card => card.movementEnabled = false)
    this.tiltCardsBy(0);
    this.movementEnabled = false;
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
}
