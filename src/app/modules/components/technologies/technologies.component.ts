import { Component, OnInit } from '@angular/core';
import { Icons } from '../interfaces/interfaces';

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
    icons: Icons[] = [
        {
            link: 'assets/svgs/html-5.svg',
            name: 'Html',
        },
        {
            link: 'assets/svgs/css.svg',
            name: 'Css',
        },
        {
            link: 'assets/svgs/javascript.svg',
            name: 'Javascript',
        },
        {
            link: 'assets/svgs/typescript.svg',
            name: 'Typescript',
        },
        {
            link: 'assets/svgs/angular.png',
            name: 'Angular',
        },
        {
            link: 'assets/svgs/git.svg',
            name: 'Git',
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
