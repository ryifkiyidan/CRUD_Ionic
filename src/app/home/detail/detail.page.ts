import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../../items/items.service';
import {Item} from '../../items/item.model';
import {Motherboard} from '../../items/motherboard.model';
import {Ram} from '../../items/ram.model';
import {Cpu} from '../../items/cpu.model';
import {Gpu} from '../../items/gpu.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedItem: Item;
  loadedCpu: Cpu;
  loadedRam: Ram;
  loadedMotherboard: Motherboard;
  loadedGpu: Gpu;
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
      switch (this.loadedItem.type){
        case 'cpu':
          this.loadedCpu = this.itemsServ.getCpu(this.itemId);
          break;
        case 'ram':
          this.loadedRam = this.itemsServ.getRam(this.itemId);
          break;
        case 'motherboard':
          this.loadedMotherboard = this.itemsServ.getMotherboard(this.itemId);
          break;
        case 'gpu':
          this.loadedGpu = this.itemsServ.getGpu(this.itemId);
          break;
      }
    });
  }
}
