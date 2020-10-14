import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items/items.service';
import {Item} from '../items/item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Item[];
  constructor(
      private itemsServ: ItemsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.items = this.itemsServ.getAllItems();
  }

}
