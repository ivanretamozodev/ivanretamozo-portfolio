import { Component } from '@angular/core';
import { cardProyects } from '../interfaces/interfaces';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
    cards: cardProyects[] = [
        {
            title: 'NGgames',
            desc: 'NGgames es una PWA recoge los datos del api de rawg.io para mostrar la novedad en el mundo de los videojuegos.',
            img: '../../../../assets/NGgames.jpg',
            demoLink: 'https://nggames.netlify.app',
            repoLink: 'https://github.com/ivanretamozodev/gamesDB',
        },
        {
            title: 'MapWorld',
            desc: 'Mapworld es una PWA creada en Angular que permite ver mapas,hacer zoom en el,añadir marcadores y mas,corre gracias a la api de Mapbox',
            img: '../../../../assets/MapWorld.png',
            demoLink: 'https://ngmapworld.netlify.app',
            repoLink: 'https://github.com/ivanretamozodev/Maps-App',
        },
    ];

    constructor() {}
}
