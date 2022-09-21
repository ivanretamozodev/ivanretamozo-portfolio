import { Component } from '@angular/core';
import { Icons } from '../../interfaces/interfaces';
import { TECNOLOGIES_ICONS } from '../../mocks/tecnologiesIcons.mock';

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
    tecnologiesIcons: Icons[] = TECNOLOGIES_ICONS;
    constructor() {}
}
