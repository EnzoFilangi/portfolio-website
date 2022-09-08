import { Component } from '@angular/core';
import {GalleryContent} from "../../../../interfaces/gallery-content";

@Component({
  selector: 'app-virtue-gallery',
  templateUrl: './virtue-gallery.component.html',
  styleUrls: ['./virtue-gallery.component.css']
})
export class VirtueGalleryComponent {

  gallery: GalleryContent = {
    title_fr: "Images du réseau social Virtue",
    title_en: "Virtue social network gallery",
    gallery : [
      {
        imagesURLs: ["assets/images/projects/gallery/virtue.jpeg", "assets/images/projects/gallery/virtue2.jpeg"],
        description_fr: "La page de création de compte",
        description_en: "The account creation page"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/virtue3.jpeg"],
        description_fr: "L'utilisateur peut voir les avis laissés sur un profil et ceux donnés par cet utilisateur",
        description_en: "The user can see the opinions on a profiles, and the ones given by this user"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/virtue4.jpeg"],
        description_fr: "Il est possible de laisser un avis sur le profil d'un autre utilisateur",
        description_en: "Users can leave a opinion on the profile of another user"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/virtue6.jpeg", "assets/images/projects/gallery/virtue7.jpeg"],
        description_fr: "Il y a également un système de recherche pour trouver facilement une personne précise",
        description_en: "There's also a search bar to easily find a specific person"
      }
    ]
  }

  constructor() { }

}
