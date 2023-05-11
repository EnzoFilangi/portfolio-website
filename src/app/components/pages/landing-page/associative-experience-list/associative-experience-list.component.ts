import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-associative-experience-list',
  templateUrl: './associative-experience-list.component.html',
  styleUrls: ['./associative-experience-list.component.css']
})
export class AssociativeExperienceListComponent {
  constructor() {}

  areStacksEnabled: boolean = window.innerWidth > 1470;

  @HostListener('window:resize', ['$event.target'])
  onResize(target: Window) {
    this.areStacksEnabled = target.innerWidth > 1470;
  }
}
