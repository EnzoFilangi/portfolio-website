import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {ClipboardService} from "../../../services/clipboardService/clipboard.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  goDown = faAngleDown;
  mailIcon = faEnvelope;
  cvIcon = faIdBadge;
  linkedinIcon = faLinkedin;
  githubIcon = faGithub;

  constructor(
    private clipboardService: ClipboardService
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('copyConfirm') copyConfirm!: ElementRef;
  copyEmail() {
    this.clipboardService.copyEmail(this.copyConfirm,
      (element: ElementRef) => {
        element.nativeElement.classList.remove('hidden','opacity-0');
        setTimeout(() => element.nativeElement.classList.add('opacity-0'), 1000);
        setTimeout(() => element.nativeElement.classList.add('hidden'), 1200);
      }
    );
  }
}
