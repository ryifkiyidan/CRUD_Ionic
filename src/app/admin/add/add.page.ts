import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemsService} from '../../items/items.service';
import {NavController} from '@ionic/angular';
import {Ram} from '../../items/ram.model';
import {Cpu} from '../../items/cpu.model';
import {Motherboard} from '../../items/motherboard.model';
import {Gpu} from '../../items/gpu.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  constructor(
      private itemsServ: ItemsService,
      private navCtrl: NavController
  ) { }
  form: FormGroup;
  validationMessages = {
    imageUrl: [
      { type: 'required', message: 'Image URL is required.' }
    ],
    type: [
      { type: 'required', message: 'Type is required.' }
    ],
    brand: [
      { type: 'required', message: 'Brand is required.' }
    ],
    model: [
      { type: 'required', message: 'Model is required.' }
    ],
    price: [
      { type: 'required', message: 'Price is required.' }
    ],
    stock: [
      { type: 'required', message: 'Stock is required.' }
    ],
    // CPU
    baseClock: [
      { type: 'required', message: 'Base Clock is required'}
    ],
    boostClock: [
      { type: 'required', message: 'Boost Clock is required'}
    ],
    coreCount: [
      { type: 'required', message: '# of CPU Cores is required'}
    ],
    threadCount: [
      { type: 'required', message: '# of Threads is required'}
    ],
    // RAM
    speedRam: [
      { type: 'required', message: 'Speed is required'}
    ],
    sizeRam: [
      { type: 'required', message: 'Size is required'}
    ],
    // Motherboard
    chipset: [
      { type: 'required', message: 'Chipset is required'}
    ],
    socket: [
      { type: 'required', message: 'Socket is required'}
    ],
    // GPU
    sizeGpu: [
      { type: 'required', message: 'Size is required'}
    ],
    speedGpu: [
      { type: 'required', message: 'Speed is required'}
    ]
  };

  ngOnInit() {
    this.form = new FormGroup({
      gForm: new FormGroup({
        imageUrl: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        type: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        brand: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        model: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        price: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        stock: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      }),
      cpuForm: new FormGroup({
        // CPU
        baseClock: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        boostClock: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        coreCount: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        threadCount: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      }),
      ramForm: new FormGroup({
        // RAM
        speedRam: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        sizeRam: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      }),
      motherboardForm: new FormGroup({
        // Motherboard
        chipset: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        socket: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      }),
      gpuForm: new FormGroup({
        // GPU
        sizeGpu: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        speedGpu: new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      }),
    });
  }

  convertToCurrency(price: string){
    const sisa    = price.length % 3;
    const rupiah  = price.substr(0, sisa);
    const ribuan  = price.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      const separator = sisa ? '.' : '';
      return rupiah + separator + ribuan.join('.');
    }else{
      return price;
    }
  }

  onSubmit(){
    const iImageUrl = this.form.get('gForm.imageUrl').value.toString();
    const iType = this.form.get('gForm.type').value.toString();
    const iBrand = this.form.get('gForm.brand').value.toString();
    const iModel = this.form.get('gForm.model').value.toString();
    const iPrice = this.convertToCurrency(this.form.get('gForm.price').value.toString());
    const iStock = this.form.get('gForm.stock').value.toString();

    if (iType === 'cpu'){
      const iId = 'c' + (this.itemsServ.getItemLength(iType) + 1);
      const iBaseClock = this.form.get('cpuForm.baseClock').value.toString();
      const iBoostClock = this.form.get('cpuForm.boostClock').value.toString();
      const iCoreCount = this.form.get('cpuForm.coreCount').value.toString();
      const iThreadCount = this.form.get('cpuForm.threadCount').value.toString();
      const cpu: Cpu = {
        id: iId,
        type: iType,
        imageUrl: iImageUrl,
        brand: iBrand,
        model: iModel,
        price: iPrice,
        stock: iStock,
        baseClock: iBaseClock,
        boostClock: iBoostClock,
        coreCount: iCoreCount,
        threadCount: iThreadCount
      };
      // @ts-ignore
      this.itemsServ.addCpu(cpu);
    }
    else if (iType === 'ram'){
      const iId = 'r' + (this.itemsServ.getItemLength(iType) + 1);
      const iSpeedRam = this.form.get('ramForm.speedRam').value.toString();
      const iSizeRam = this.form.get('ramForm.sizeRam').value.toString();
      const ram: Ram = {
        id: iId,
        type: iType,
        imageUrl: iImageUrl,
        brand: iBrand,
        model: iModel,
        price: iPrice,
        stock: iStock,
        speed: iSpeedRam,
        size: iSizeRam,
      };
      // @ts-ignore
      this.itemsServ.addRam(ram);
    }
    else if (iType === 'motherboard'){
      const iId = 'm' + (this.itemsServ.getItemLength(iType) + 1);
      const iChipset = this.form.get('motherboardForm.chipset').value.toString();
      const iSocket = this.form.get('motherboardForm.socket').value.toString();
      const motherboard: Motherboard = {
        id: iId,
        type: iType,
        imageUrl: iImageUrl,
        brand: iBrand,
        model: iModel,
        price: iPrice,
        stock: iStock,
        chipset: iChipset,
        socket: iSocket,
      };
      // @ts-ignore
      this.itemsServ.addMotherboard(motherboard);
    }
    else if (iType === 'gpu'){
      const iId = 'g' + (this.itemsServ.getItemLength(iType) + 1);
      const iSizeGpu = this.form.get('gpuForm.sizeGpu').value.toString();
      const iSpeedGpu = this.form.get('gpuForm.speedGpu').value.toString();
      const gpu: Gpu = {
        id: iId,
        type: iType,
        imageUrl: iImageUrl,
        brand: iBrand,
        model: iModel,
        price: iPrice,
        stock: iStock,
        size: iSizeGpu,
        speed: iSpeedGpu,
      };
      // @ts-ignore
      this.itemsServ.addGpu(gpu);
    }

    this.navCtrl.navigateBack('/admin');
  }

}
