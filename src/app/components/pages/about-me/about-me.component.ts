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
    }
  ]


  /**
   * Returns the number of weeks elasped since April 19, 2021
   *
   * Used to not have to update the website every week
   */
  getWorkoutWeeks(): number {
    const originalDate = new Date("2021/04/19Z+2");
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
