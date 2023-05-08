import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-association-card',
  templateUrl: './association-card.component.html',
  styleUrls: ['./association-card.component.css']
})
export class AssociationCardComponent implements OnInit {

  @Input() logoUrl: string = "";
  @Input() role: string = "";
  @Input() dates: string = "";
  @Input() description: string = "";

  open: boolean = false;
  @HostBinding('class') hostDynamicClasses: string = 'slide-on-hover'

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard(): void{
    this.open = !this.open;
    this.hostDynamicClasses = this.open ? 'translated-right' : 'slide-on-hover'
  }

  @HostListener('click')
  onClick(): void{
    this.toggleCard()
  }
}
