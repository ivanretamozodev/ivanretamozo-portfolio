import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' },
];

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
};

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
})
export class AppRoutingModule {}
