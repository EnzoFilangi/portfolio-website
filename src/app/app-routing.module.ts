import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component";
import {NotFoundComponent} from "./components/general/not-found/not-found.component";
import {LegalComponent} from "./components/pages/legal/legal.component";
import {SkillsComponent} from "./components/pages/skills/skills.component";
import {AboutMeComponent} from "./components/pages/about-me/about-me.component";
import {ProjectsPageComponent} from "./components/pages/projects-page/projects-page.component";
import {DndGalleryComponent} from "./components/pages/projects-page/dnd-gallery/dnd-gallery.component";
import {UllGalleryComponent} from "./components/pages/projects-page/ull-gallery/ull-gallery.component";
import {AsianGalleryComponent} from "./components/pages/projects-page/asian-gallery/asian-gallery.component";
import {VirtueGalleryComponent} from "./components/pages/projects-page/virtue-gallery/virtue-gallery.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'legal', component: LegalComponent},
  {path: 'competences', component: SkillsComponent},
  {path: 'projets', component: ProjectsPageComponent},
  {path: 'moi', component: AboutMeComponent},
  {path: 'galerie/dnd-tracker', component: DndGalleryComponent},
  {path: 'galerie/ull', component: UllGalleryComponent},
  {path: 'galerie/asianefrei', component: AsianGalleryComponent},
  {path: 'galerie/virtue', component: VirtueGalleryComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
