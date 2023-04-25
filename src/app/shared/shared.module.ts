import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [MenuComponent, HeaderComponent, FooterComponent],
    imports: [CommonModule, RouterModule, AppRoutingModule],
    exports: [MenuComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
