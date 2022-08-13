import { Component } from '@angular/core';
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-studies-timeline',
  templateUrl: './studies-timeline.component.html',
  styleUrls: ['./studies-timeline.component.css']
})
export class StudiesTimelineComponent {

  graduationIcon = faGraduationCap;

  constructor() { }

}
