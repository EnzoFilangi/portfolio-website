import {Component, ElementRef, ViewChild} from '@angular/core';

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {ClipboardService} from "../../../../services/clipboardService/clipboard.service";

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.css']
})
export class HeroHeaderComponent {

  goDown = faAngleDown;
  mailIcon = faEnvelope;
  cvIcon = faIdBadge;
  linkedinIcon = faLinkedin;
  githubIcon = faGithub;

  constructor(
    private clipboardService: ClipboardService
  ) { }

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
