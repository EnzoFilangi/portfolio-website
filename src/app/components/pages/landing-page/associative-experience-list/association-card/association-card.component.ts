import {Component, Input, OnInit} from '@angular/core';


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

  constructor() {}

  ngOnInit(): void {
  }
}
