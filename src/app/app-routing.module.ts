import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/components/home/home.component';
import { TechnologiesComponent } from './modules/components/technologies/technologies.component';
import { PortfolioComponent } from './modules/components/portfolio/portfolio.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
;

const routes : Routes = [
  {path: "",component: HomeComponent},
  {path: "technologies",component: TechnologiesComponent},
  {path: "portfolio",component: PortfolioComponent},
  {path: "contacts",component: ContactComponent},
  {path: '**', redirectTo: ""}
]

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,routerOptions)
  ]
})
export class AppRoutingModule { }