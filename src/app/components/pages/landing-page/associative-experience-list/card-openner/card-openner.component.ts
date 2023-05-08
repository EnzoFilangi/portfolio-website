import {Component, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-openner',
  templateUrl: './card-openner.component.html',
  styleUrls: ['./card-openner.component.css']
})
export class CardOpennerComponent implements OnInit {

  @HostBinding('style') private hostDynamicStyle: string = '';
  @HostBinding('class') private hostDynamicClass: string = 'slide-on-hover cursor-pointer';

  private _movementEnabled : boolean = true;

  public set movementEnabled(value: boolean) {
    this._movementEnabled = value;
    this.hostDynamicClass = this.movementEnabled ? 'slide-on-hover cursor-pointer' : '';
  }

  public get movementEnabled(): boolean {
    return this._movementEnabled
  }

  constructor(
    private ref: ElementRef
  ) { }

  ngOnInit(): void {
  }

  tiltCard(degree: number): void {
    this.hostDynamicStyle = `transform: rotate(${degree}deg);`;
  }

  private openCard(): void {
    if (!this._movementEnabled) return;
    this.hostDynamicClass = 'translated-right cursor-pointer';
  }

  private closeCard(): void {
    if (!this._movementEnabled) return;
    this.hostDynamicClass = 'slide-on-hover cursor-pointer';
  }

  /**
   * Close the card on click outside
   * @param target
   */
  @HostListener('document:click', ['$event.target'])
  private closeOnClick(target: Element) {
    if(!this.ref.nativeElement.contains(target)) {
      this.closeCard();
    } else {
      this.openCard();
    }
  }

  /**
   * Close the card on scroll
   */
  @HostListener('window:scroll', ['$event'])
  private closeOnScroll() {
    this.closeCard();
  }
}
