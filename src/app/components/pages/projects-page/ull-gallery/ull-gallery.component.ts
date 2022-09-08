import { Component } from '@angular/core';
import {GalleryContent} from "../../../../interfaces/gallery-content";

@Component({
  selector: 'app-ull-gallery',
  templateUrl: './ull-gallery.component.html',
  styleUrls: ['./ull-gallery.component.css']
})
export class UllGalleryComponent {

  gallery: GalleryContent = {
    title_fr: "Site pour les professionnels et application pour les particuliers de ULL",
    title_en: "ULL's service provider website and customer mobile application",
    gallery : [
      {
        imagesURLs: ["assets/images/projects/gallery/ULL.jpeg", "assets/images/projects/gallery/ULL2.jpeg"],
        description_fr: "La page d'accueil",
        description_en: "The landing page"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL4.jpeg"],
        description_fr: "La page de connexion",
        description_en: "The login page"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL5.jpeg", "assets/images/projects/gallery/ULL6.jpeg"],
        description_fr: "La page d'entreprise d'un professionnel",
        description_en: "A service provider's professionnal page"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL7.jpeg"],
        description_fr: "Le menu de navigation",
        description_en: "The navigation menu"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL8.jpeg", "assets/images/projects/gallery/ULL9.jpeg"],
        description_fr: "Les professionnels peuvent modifier leurs informations",
        description_en: "Providers can update their information"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL10.jpeg", "assets/images/projects/gallery/ULL11.jpeg"],
        description_fr: "Les professionnels peuvent ajouter des prestations et réorganiser l'ordre d'apparition sur leur page",
        description_en: "Providers can add new services and change the ordering on their page"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL12.jpeg", "assets/images/projects/gallery/ULL13.jpeg"],
        description_fr: "Les professionnels peuvent consulter leurs prestations à venir",
        description_en: "Providers can see their upcoming events"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL14.jpeg", "assets/images/projects/gallery/ULL15.jpeg"],
        description_fr: "Les professionnels peuvent accepter ou refuser les demandes de prestations",
        description_en: "Providers can accept or refuse event requests"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL16.png"],
        description_fr: "Les particuliers se connectent avec Google",
        description_en: "Customers log in with Google"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL17.png"],
        description_fr: "Les particuliers ont accès à un ensemble de catégories pour rechercher leur prestataire",
        description_en: "Customers have access to a variety of categories to search for a provider"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL18.png"],
        description_fr: "Les particuliers peuvent préparer facilement des évènements dans l'application",
        description_en: "Customers can easily prepare events in the app "
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL19.png"],
        description_fr: "Les particuliers peuvent voir une liste de leurs évènements",
        description_en: "Customers can see a list of their events"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/ULL20.png"],
        description_fr: "Les particuliers peuvent consulter la page des prestataires pour réserver des prestations",
        description_en: "Customers can see the profiles of providers to book them for an event"
      }
    ]
  }

  constructor() { }

}
