import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor() { }

  copyEmail(element: ElementRef, callback: {(e: ElementRef): void}): void {
    navigator.clipboard.writeText('enzo.filangi@efrei.net').then(() => callback(element));
  }
}
