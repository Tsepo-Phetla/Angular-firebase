import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
title = 'Tsepo - Phetla';
constructor(){}
menuVariable:boolean = false;
menu_icon_Varriable:boolean = false;


openMenu(){
  this.menuVariable =! this.menuVariable;
  this.menu_icon_Varriable =! this.menu_icon_Varriable;
}
}
