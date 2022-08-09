import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { faCopy } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('copyButton') copyButton!: ElementRef<HTMLButtonElement>;
  clipboardIcon = faCopy;

  startYear = 2022;
  yearInterval: string = `${this.startYear}`;

  constructor() {
    const year = new Date().getFullYear();
    if (year > this.startYear){
      this.yearInterval += `-${year}`;
    }
  }

  ngOnInit(): void {
  }

  copyEmail() {
    navigator.clipboard.writeText('enzo.filangi@efrei.net').then(
      () => {
        this.copyButton.nativeElement.classList.add("text-green-400", "hover:text-green-400");
        setTimeout(() => this.copyButton.nativeElement.classList.remove("text-green-400", "hover:text-green-400"), 1000);
      }
    );
  }
}
