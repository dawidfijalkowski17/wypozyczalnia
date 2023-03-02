import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthenticationService } from '../../domain/modules/login/services/authentication.service';
import { menuItems } from './data/menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  protected isLogged!: boolean;

  menuItems: MenuItem[] = [];


    constructor(private readonly authenticationService: AuthenticationService) {
      if(localStorage.getItem('token')){
        this.isLogged = true;
        this._setMenuItemsVisible(true);
      }
    }

  ngOnInit(): void {
  }

  private _setMenuItemsVisible(isVisible: boolean): void{
    this.menuItems = menuItems.map((item) => {
      return (item.id !== '1') ?  { visible: isVisible, ...item} : item
    });
  }

  public logout(){
    localStorage.setItem('token', '');
    this.authenticationService.logout();
    this._setMenuItemsVisible(false);
  }
}
