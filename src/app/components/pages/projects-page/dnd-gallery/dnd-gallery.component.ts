import { Component } from '@angular/core';
import {GalleryContent} from "../../../../interfaces/gallery-content";

@Component({
  selector: 'app-dnd-gallery',
  templateUrl: './dnd-gallery.component.html',
  styleUrls: ['./dnd-gallery.component.css']
})
export class DndGalleryComponent {

  gallery: GalleryContent = {
    title_fr: "Images de l'Initative Tracker D&D",
    title_en: "DnD Initative Tracker Gallery",
    gallery : [
      {
        imagesURLs: ["assets/images/projects/gallery/dnd.jpeg"],
        description_fr: "La page d'accueil vide",
        description_en: "The empty base page"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/dnd2.jpeg"],
        description_fr: "L'utilisateur a la possibilité d'ajouter des monstres facilement",
        description_en: "The user can easily add monsters to the list"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/dnd3.jpeg"],
        description_fr: "Le tracker au cours d'un combat, avec des joueurs et des monstres blessés",
        description_en: "The tracker during a fight, with players and some hurt monsters"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/dnd4.jpeg"],
        description_fr: "Des boutons sont disponibles pour sauvegarder et restaurer l'état d'un combat",
        description_en: "Buttons are available to save and restore a fight's state"
      }
    ]
  }

  constructor() { }

}
