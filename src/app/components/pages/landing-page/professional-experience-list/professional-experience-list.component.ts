import { Component } from '@angular/core';
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-professional-experience-list',
  templateUrl: './professional-experience-list.component.html',
  styleUrls: ['./professional-experience-list.component.css']
})
export class ProfessionalExperienceListComponent {

  locationIcon = faLocationDot;
  calendarIcon = faCalendarDays;

  constructor() { }
}
