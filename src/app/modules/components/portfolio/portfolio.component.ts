import { Component, OnInit } from '@angular/core';
import { cardProyects } from '../interfaces/icons.interface';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
    cards: cardProyects[] = [
        {
            title: 'asdasdasdd',
            desc: 'adasdasdsdadasd',
            img: '',
            demoLink: 'https://www.youtube.com/',
            deployLink: 'https://www.youtube.com/',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
