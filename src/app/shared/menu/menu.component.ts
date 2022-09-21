import { Component } from '@angular/core';
import { navbarIcons } from 'src/app/modules/interfaces/interfaces';
import { NAVBAR_ICONS } from '../../modules/mocks/navbarIcons.mock';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    navbarIcons: navbarIcons[] = NAVBAR_ICONS;
}
