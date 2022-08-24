import { Component } from '@angular/core';
import { menuIcons } from '../../modules/components/interfaces/interfaces';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    menuIcons: menuIcons[] = [
        {
            name: 'sobre mi',
            class: 'uil uil-house-user',
            routes: 'home',
        },
        {
            name: 'tecnologias',
            class: 'uil uil-laptop',
            routes: 'technologies',
        },
        {
            name: 'portafolio',
            class: 'uil uil-bag',
            routes: 'portfolio',
        },
        {
            name: 'contactos',
            class: 'uil uil-at',
            routes: 'contacts',
        },
    ];

    constructor() {}
}
