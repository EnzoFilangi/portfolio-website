import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { faCopy } from "@fortawesome/free-solid-svg-icons";
import {ClipboardService} from "../../../services/clipboardService/clipboard.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  clipboardIcon = faCopy;

  startYear = 2022;
  yearInterval: string = `${this.startYear}`;

  constructor(
    private clipboardService: ClipboardService
  ) {
    const year = new Date().getFullYear();
    if (year > this.startYear){
      this.yearInterval += `-${year}`;
    }
  }

  ngOnInit(): void {
  }

  @ViewChild('copyButton') copyButton!: ElementRef<HTMLButtonElement>;
  copyEmail() {
    this.clipboardService.copyEmail(this.copyButton,
      (element: ElementRef) => {
        element.nativeElement.classList.add("text-green-400", "hover:text-green-400");
        setTimeout(() => element.nativeElement.classList.remove("text-green-400", "hover:text-green-400"), 1000);
      }
    );
  }
}
