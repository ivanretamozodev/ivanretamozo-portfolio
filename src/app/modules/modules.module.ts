import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    TechnologiesComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    TechnologiesComponent,
    PortfolioComponent
  ]
})
export class ModulesModule { }
