import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() projectTitle: string = "";
  @Input() date: string = "";
  @Input() description: string = "";
  @Input() iconLink: string = "";
  @Input() galleryLink: string | undefined;

  constructor() { }

}
