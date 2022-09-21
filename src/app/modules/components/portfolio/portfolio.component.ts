import { Component } from '@angular/core';
import { cardProyects } from '../../interfaces/interfaces';
import { CARD_MOCK } from '../../mocks/card.mock';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
    cards: cardProyects[] = CARD_MOCK;

    constructor() {}
}
