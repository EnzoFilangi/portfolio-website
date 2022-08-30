import { TestBed } from '@angular/core/testing';

import { LanguageSwitcherService } from './language-switcher.service';
import {RouterTestingModule} from "@angular/router/testing";
import {LandingPageComponent} from "../../components/pages/landing-page/landing-page.component";
import {NotFoundComponent} from "../../components/general/not-found/not-found.component";

describe('LanguageSwitcherService', () => {
  let service: LanguageSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: '', component: LandingPageComponent},
          {path: '**', component: NotFoundComponent}
        ])
      ]
    });
    service = TestBed.inject(LanguageSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
