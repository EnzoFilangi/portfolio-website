import { Component } from '@angular/core';
import {CarouselItem} from "../../../interfaces/carousel-item";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  constructor() { }

  carouselData: CarouselItem[] = [
    {
      picturesNames: ["museum-histoire-naturelle.jpeg", "museum-histoire-naturelle-2.jpeg"],
      title: {
        fr: "Muséum d'histoire naturelle - Paris",
        en: "Natural history museum - Paris, France"
      }
    },
    {
      picturesNames: ["Basilica-di-Santa-Maria-Maggiore.jpeg", "Basilica-di-Santa-Maria-Maggiore-2.jpeg", "Basilica-di-Santa-Maria-Maggiore-3.jpeg"],
      title: {
        fr: "Basilica di Santa Maria Maggiore - Bergame, Italie",
        en: "Basilica di Santa Maria Maggiore - Bergamo, Italy"
      }
    },
    {
      picturesNames: ["sirmione.jpeg", "sirmione-2.jpeg", "sirmione-3.jpeg"],
      title: {
        fr: "Chateau de Sirmione - Sirmione, Italie",
        en: "Sirmione castle - Sirmione, Italy"
      }
    },
    {
      picturesNames: ["musee-du-jouet.jpeg", "musee-du-jouet-2.jpeg", "musee-du-jouet-3.jpeg", "musee-du-jouet-4.jpeg"],
      title: {
        fr: "Musée du jouet - Colmar",
        en: "Museum of toys - Colmar, France"
      }
    },
    {
      picturesNames: ["ours.jpeg", "cerf.jpeg", "loup.jpeg", "temple.jpeg"],
      title: {
        fr: "Parc zoologique de Pairi Daiza - Belgique",
        en: "Pairi Daiza zoo - Belgium"
      }
    },
    {
      picturesNames: ["montpellier-art-moderne.jpeg", "montpellier-art-moderne-2.jpeg"],
      title: {
        fr: "Montpellier contemporain - Montpellier",
        en: "Montpellier contemporain - Montpellier, France"
      }
    },
    {
      picturesNames: ["montpellier-aquarium.jpeg", "montpellier-aquarium-2.jpeg"],
      title: {
        fr: "Planet Ocean Montpellier - Montpellier",
        en: "Planet Ocean Montpellier - Montpellier, France"
      }
    },
  ]


  /**
   * Returns the number of weeks elasped since April 19, 2021
   *
   * Used to not have to update the website every week
   */
  getWorkoutWeeks(): number {
    const originalDate = new Date("2021/04/19");
    const currentDate = new Date();

    return this.getWeeksBetween(originalDate, currentDate);
  }

  /**
   * Returns the number of weeks between the two dates
   * @param startDate
   * @param endDate
   */
  getWeeksBetween(startDate: Date, endDate: Date): number {
    // Return the number of ms between the two dates, divided by the duration of a week in ms, to get the number of weeks
    // and floor it, so it increments only when a week is fully complete
    return Math.floor((endDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
  }
}
