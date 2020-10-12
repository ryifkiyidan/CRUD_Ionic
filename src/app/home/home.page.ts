import {Component} from '@angular/core';
import {Item} from '../items/item.model';
import {ItemsService} from '../items/items.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Item[];
  currLayout: string;
  constructor(
      private itemsServ: ItemsService
  ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(){
    this.currLayout = '2';
  }

  ionViewWillEnter(){
    this.items = this.itemsServ.getAllItems();
  }

  changeLayout(){
    if (this.currLayout === '1'){
      this.currLayout = '2';
    }
    else{
      this.currLayout = '1';
    }
  }

}
