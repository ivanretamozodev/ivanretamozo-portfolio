import { Component, OnInit } from '@angular/core';
import { Icons, menuIcons } from '../../modules/components/interfaces/icons.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  menuIcons : menuIcons[] =[
    {
    name: "Home",
    class: "uil uil-house-user",
    routes: "home"
    },
    {
      name: "tecnologies",
      class: "uil uil-laptop",
      routes: "technologies"
    },
    {
      name: "portafolio",
      class: "uil uil-bag",
      routes: "portfolio"
    },
    {
      name: "contactos",
      class: "uil uil-at",
      routes: "contacts"
    },


  ]

  constructor() { }



}
