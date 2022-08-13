import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    NotFoundComponent,
    StudiesTimelineComponent,
    HeroHeaderComponent,
    ProfessionalExperienceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
