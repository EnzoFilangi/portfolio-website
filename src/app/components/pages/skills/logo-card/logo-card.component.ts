import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo-card',
  templateUrl: './logo-card.component.html',
  styleUrls: ['./logo-card.component.css']
})
export class LogoCardComponent {

  @Input() pictureUrl!: string;
  @Input() text!: string;

  @Input() fixedSize: boolean = true;

  constructor() { }
}
