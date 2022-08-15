import { Component } from '@angular/core';

import {faChevronRight, faLaptopCode} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {

  constructor() { }

  codeIcon = faLaptopCode
  chevronRight = faChevronRight;
}
