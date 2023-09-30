import {Component, Input, OnInit} from '@angular/core';
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-professional-experience-card',
  templateUrl: './professional-experience-card.component.html',
  styleUrls: ['./professional-experience-card.component.css']
})
export class ProfessionalExperienceCardComponent implements OnInit {

  @Input() order !: 'forward'|'reverse';
  @Input() coverImageUrl !: string;
  @Input() coverImageAlt !: string;
  @Input() logoUrl !: string;
  @Input() logoAlt !: string;
  @Input() companyName !: string;
  @Input() jobTitle !: string;
  @Input() dates !: string;
  @Input() location !: string;
  @Input() jobDescription !: string;
  jobDescriptionSplit: string[] = [];

  locationIcon = faLocationDot;
  calendarIcon = faCalendarDays;

  constructor() {}

  ngOnInit(): void {
    this.jobDescriptionSplit = this.jobDescription.split('|');
  }
}
