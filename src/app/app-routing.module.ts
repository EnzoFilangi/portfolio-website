import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component";
import {NotFoundComponent} from "./components/general/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
