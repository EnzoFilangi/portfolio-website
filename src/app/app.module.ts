import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PlatformModule} from '@angular/cdk/platform';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { NotFoundComponent } from './components/general/not-found/not-found.component';
import { StudiesTimelineComponent } from './components/pages/landing-page/studies-timeline/studies-timeline.component';
import { HeroHeaderComponent } from './components/pages/landing-page/hero-header/hero-header.component';
import { ProfessionalExperienceListComponent } from './components/pages/landing-page/professional-experience-list/professional-experience-list.component';
import { AssociativeExperienceListComponent } from './components/pages/landing-page/associative-experience-list/associative-experience-list.component';
import { FeaturedProjectsComponent } from './components/pages/landing-page/featured-projects/featured-projects.component';
import { LegalComponent } from './components/pages/legal/legal.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { LogoCardComponent } from './components/pages/skills/logo-card/logo-card.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { CarouselComponent } from './components/common/carousel/carousel.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { GalleryComponent } from './components/common/gallery/gallery.component';
import { DndGalleryComponent } from './components/pages/projects-page/dnd-gallery/dnd-gallery.component';
import { UllGalleryComponent } from './components/pages/projects-page/ull-gallery/ull-gallery.component';
import { VirtueGalleryComponent } from './components/pages/projects-page/virtue-gallery/virtue-gallery.component';
import { AsianGalleryComponent } from './components/pages/projects-page/asian-gallery/asian-gallery.component';
import { ProjectCardComponent } from './components/pages/projects-page/project-card/project-card.component';
import { LinkToFilenamePipe } from './pipes/link-to-filename.pipe';
import { AssociationStackComponent } from './components/pages/landing-page/associative-experience-list/association-stack/association-stack.component';
import { AssociationCardComponent } from './components/pages/landing-page/associative-experience-list/association-card/association-card.component';
import { CardOpennerComponent } from './components/pages/landing-page/associative-experience-list/card-openner/card-openner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    NotFoundComponent,
    StudiesTimelineComponent,
    HeroHeaderComponent,
    ProfessionalExperienceListComponent,
    AssociativeExperienceListComponent,
    FeaturedProjectsComponent,
    LegalComponent,
    SkillsComponent,
    LogoCardComponent,
    AboutMeComponent,
    CarouselComponent,
    ProjectsPageComponent,
    GalleryComponent,
    DndGalleryComponent,
    UllGalleryComponent,
    VirtueGalleryComponent,
    AsianGalleryComponent,
    ProjectCardComponent,
    LinkToFilenamePipe,
    AssociationStackComponent,
    AssociationCardComponent,
    CardOpennerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PlatformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
