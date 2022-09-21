import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//modulos creados por mi
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
//componentes de angular
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ModulesModule, RouterModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
