import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../../items/items.service';
import {Item} from '../../items/item.model';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedItem: Item;
  private itemId: string;
  constructor(
      private activatedRoute: ActivatedRoute,
      private itemsServ: ItemsService
  ) { }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('itemId')) { return; }
      this.itemId = paramMap.get('itemId');
      this.loadedItem = this.itemsServ.getItem(this.itemId);
    });
  }
}
