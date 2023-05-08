import {AfterContentInit, Component, ContentChildren, HostListener, QueryList} from '@angular/core';
import {CardOpennerComponent} from "../card-openner/card-openner.component";

@Component({
  selector: 'app-association-stack',
  templateUrl: './association-stack.component.html',
  styleUrls: ['./association-stack.component.css']
})
export class AssociationStackComponent implements AfterContentInit {

  @ContentChildren(CardOpennerComponent) cards!: QueryList<CardOpennerComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    this.cards.last.movementEnabled = false;
    this.triggerDefaultRotation();
  }

  @HostListener('mouseleave')
  triggerDefaultRotation(): void {
    this.cards.forEach((card, index) => card.tiltCard((this.cards.length - index - 1) * 3))
  }

  @HostListener('mouseenter')
  triggerAccentuatedRotation(): void {
    this.cards.forEach((card, index) => card.tiltCard((this.cards.length - index - 1) * 5))
  }
}
