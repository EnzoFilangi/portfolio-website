import {Component, Input} from '@angular/core';
import {LanguageSwitcherService} from "../../../services/languageSwitcherService/language-switcher.service";
import {Locales} from "../../../interfaces/enums/locales";
import {GalleryItem} from "../../../interfaces/gallery-item";
import {GalleryContent} from "../../../interfaces/gallery-content";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() content : GalleryContent = {title_fr: "", title_en: "", gallery: []};

  constructor(
    private languageSwitcherService: LanguageSwitcherService
  ) { }

  getTitle(content : GalleryContent): string {
    switch (this.languageSwitcherService.getCurrentLocale()){
      case Locales.fr_FR: return content.title_fr;
      case Locales.en_US: return content.title_en;
      default: return content.title_fr;
    }
  }

  /**
   * Returns the entry's description in the right language
   * @param entry
   */
  getDescription(entry: GalleryItem): string {
    switch (this.languageSwitcherService.getCurrentLocale()){
      case Locales.fr_FR: return entry.description_fr;
      case Locales.en_US: return entry.description_en;
      default: return entry.description_fr;
    }
  }
}
