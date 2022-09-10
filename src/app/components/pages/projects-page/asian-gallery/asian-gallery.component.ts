import { Component } from '@angular/core';
import {GalleryContent} from "../../../../interfaces/gallery-content";

@Component({
  selector: 'app-asian-gallery',
  templateUrl: './asian-gallery.component.html',
  styleUrls: ['./asian-gallery.component.css']
})
export class AsianGalleryComponent {

  gallery: GalleryContent = {
    title_fr: "Images du site de l'Asian'Efrei",
    title_en: "Asian'Efrei's website gallery",
    gallery : [
      {
        imagesURLs: ["assets/images/projects/gallery/asian.jpeg"],
        description_fr: "La page d'accueil du site",
        description_en: "The website's landing page"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/asian2.jpeg"],
        description_fr: "Le site possède une page où l'association peut poster des articles",
        description_en: "The website has a page where the club can post articles"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/asian4.jpeg", "assets/images/projects/gallery/asian5.jpeg"],
        description_fr: "Un exemple d'article. Le titre de la page est mit à jour automatiquement et indexé par les moteurs de recherche grâce au SSR",
        description_en: "An article example. The page title is automatically updated and indexed by search engines because of SSR"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/asian3.jpeg"],
        description_fr: "Le site propose aussi une galerie pour les photos des évènements",
        description_en: "The website also has a gallery to display pictures of events"
      },
      {
        imagesURLs: ["assets/images/projects/gallery/asian6.jpeg"],
        description_fr: "Un exemple de galerie",
        description_en: "A gallery example"
      }
    ]
  }


  constructor() { }

}
