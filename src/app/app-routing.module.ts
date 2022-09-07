import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component";
import {NotFoundComponent} from "./components/general/not-found/not-found.component";
import {LegalComponent} from "./components/pages/legal/legal.component";
import {SkillsComponent} from "./components/pages/skills/skills.component";
import {AboutMeComponent} from "./components/pages/about-me/about-me.component";
import {ProjectsPageComponent} from "./components/pages/projects-page/projects-page.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'legal', component: LegalComponent},
  {path: 'competences', component: SkillsComponent},
  {path: 'projets', component: ProjectsPageComponent},
  {path: 'moi', component: AboutMeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
