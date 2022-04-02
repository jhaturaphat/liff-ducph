import { Component, OnInit } from '@angular/core';
import { FabMenuAnimatios } from './fab-menu.animations';
@Component({
  selector: 'app-fab-menu',
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.css'],
  animations: FabMenuAnimatios
})
export class FabMenuComponent implements OnInit {

  constructor() { }

  fabButtons = [
    {
      icon: 'timeline',
      url:'/AAAA'
    },
    {
      icon: 'view_headline',
      url:'/BBBB'
    },
    {
      icon: 'room',
      url:'/CCCC'
    },
    {
      icon: 'lightbulb_outline',
      url:'/DDDD'
    },
    {
      icon: 'lock',
      url:'/EEEE'
    }
  ];
  buttons:any = [];
  fabTogglerState = 'inactive';

  ngOnInit(): void {
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  btnAction(url:any){
    console.log(url);
    
  }

}
