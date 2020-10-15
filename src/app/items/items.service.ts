import { Injectable } from '@angular/core';
import {Cpu} from './cpu.model';
import {Ram} from './ram.model';
import {Motherboard} from './motherboard.model';
import {Gpu} from './gpu.model';
import {Item} from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private cpus: Cpu[] = [
    {
      id: 'c1',
      type: 'cpu',
      imageUrl: 'https://i.ibb.co/hBMLhgW/c1.jpg',
      brand: 'AMD',
      model: 'Threadripper 3990X',
      price: '66.000.000',
      stock: '2',
      baseClock: '2.9',
      boostClock: '4.3',
      coreCount: '64',
      threadCount: '128'
    },
    {
      id: 'c2',
      type: 'cpu',
      imageUrl: 'https://i.ibb.co/Z1Fz33V/c2.jpg',
      brand: 'Intel',
      model: 'Xeon E5-2697',
      price: '77.835.000',
      stock: '2',
      baseClock: '2.3',
      boostClock: '3.6',
      coreCount: '18',
      threadCount: '36',
    }
  ];
  private rams: Ram[] = [
    {
      id: 'r1',
      type: 'ram',
      imageUrl: 'https://i.ibb.co/8M0y1pC/r1.jpg',
      brand: 'Corsair',
      model: 'Vengeance RGB Pro DDR4 2x8',
      price: '1.499.000',
      stock: '10',
      speed: '3200',
      size: '16'
    },
    {
      id: 'r2',
      type: 'ram',
      imageUrl: 'https://i.ibb.co/MBZ5TWt/r2.jpg',
      brand: 'Team',
      model: 'T-Force Delta RGB DDR4 2x8',
      price: '1.313.000',
      stock: '10',
      speed: '3000',
      size: '16'
    }
  ];
  private motherboards: Motherboard[] = [
    {
      id: 'm1',
      type: 'motherboard',
      imageUrl: 'https://i.ibb.co/VDsr90r/m1.jpg',
      brand: 'Asus',
      model: 'ROG STRIX Z490-E GAMING',
      price: '5.550.000',
      stock: '5',
      chipset: 'Intel Z490',
      socket: '1200'
    },
    {
      id: 'm2',
      type: 'motherboard',
      imageUrl: 'https://i.ibb.co/C8bsWL6/m2.jpg',
      brand: 'MSI',
      model: 'MEG Z490 GODLIKE',
      price: '12.000.000',
      stock: '5',
      chipset: 'Intel Z490',
      socket: '1200'
    }
  ];
  private gpus: Gpu[] = [
    {
      id: 'g1',
      type: 'gpu',
      imageUrl: 'https://i.ibb.co/7vgM6Gg/g1.jpg',
      brand: 'Nvidia',
      model: 'GEFORCE RTX 2070',
      price: '6.900.000',
      stock: '3',
      size: '8',
      speed: '1.4'
    },
    {
      id: 'g2',
      type: 'gpu',
      imageUrl: 'https://i.ibb.co/7kY06hL/g2.jpg',
      brand: 'AMD',
      model: 'RADEON RX 5700-XT',
      price: '6.000.000',
      stock: '3',
      size: '8',
      speed: '1.7'
    }
  ];

  constructor() { }

  getAllItems(){
    return [...this.cpus, ...this.rams, ...this.motherboards, ...this.gpus];
  }
  getAllItemsExceptZeroStock(){
    return [
      ...this.cpus.filter(item => {
        return item.stock !== '0';
      }),
      ...this.rams.filter(item => {
        return item.stock !== '0';
      }),
      ...this.motherboards.filter(item => {
        return item.stock !== '0';
      }),
      ...this.gpus.filter(item => {
        return item.stock !== '0';
      })
    ];
  }
  getAllCpus(){
    return [...this.cpus];
  }
  getAllRams(){
    return [...this.rams];
  }
  getAllMotherboards(){
    return [...this.motherboards];
  }
  getAllGpus(){
    return [...this.gpus];
  }

  getItemLength(type: string){
    switch (type){
      case 'cpu':
        return this.cpus.length;
      case 'ram':
        return this.rams.length;
      case 'motherboard':
        return this.motherboards.length;
      case 'gpu':
        return this.gpus.length;
    }
  }
  getItemIndex(type: string, id: string){
    switch (type){
      case 'cpu':
        return this.cpus.findIndex(cpu => cpu.id === id);
      case 'ram':
        return this.rams.findIndex(ram => ram.id === id);
      case 'motherboard':
        return this.motherboards.findIndex(motherboard => motherboard.id === id);
      case 'gpu':
        return this.gpus.findIndex(gpu => gpu.id === id);
    }
  }

  getItem(id: string){
    const type = id.substr(0, 1);
    switch (type){
      case 'c':
        return this.getCpu(id);
      case 'r':
        return this.getRam(id);
      case 'm':
        return this.getMotherboard(id);
      case 'g':
        return this.getGpu(id);
    }
  }
  getCpu(id: string){
    return {...this.cpus.find(cpu => {
        return cpu.id === id;
      })};
  }
  getRam(id: string){
    return {...this.rams.find(ram => {
        return ram.id === id;
      })};
  }
  getMotherboard(id: string){
    return {...this.motherboards.find(motherboard => {
        return motherboard.id === id;
      })};
  }
  getGpu(id: string){
    return {...this.gpus.find(gpu => {
        return gpu.id === id;
      })};
  }

  deleteItem(id: string){
    const type = id.substr(0, 1);
    switch (type){
      case 'c':
        this.deleteCpu(id);
        break;
      case 'r':
        this.deleteRam(id);
        break;
      case 'm':
        this.deleteMotherboard(id);
        break;
      case 'g':
        this.deleteGpu(id);
        break;
    }
  }
  deleteCpu(id: string){
    this.cpus = this.cpus.filter(cpu => {
      return cpu.id !== id;
    });
  }
  deleteMotherboard(id: string){
    this.motherboards = this.motherboards.filter(motherboard => {
      return motherboard.id !== id;
    });
  }
  deleteRam(id: string){
    this.rams = this.rams.filter(ram => {
      return ram.id !== id;
    });
  }
  deleteGpu(id: string){
    this.gpus = this.gpus.filter(gpu => {
      return gpu.id !== id;
    });
  }

  addItem(item: Item){
    const type = item.type;
    switch (type){
      case 'cpu':
        // @ts-ignore
        const cpu: Cpu = item;
        this.addCpu(cpu);
        break;
      case 'ram':
        // @ts-ignore
        const ram: Ram = item;
        this.addRam(ram);
        break;
      case 'motherboard':
        // @ts-ignore
        const motherboard: Motherboard = item;
        this.addMotherboard(motherboard);
        break;
      case 'gpu':
        // @ts-ignore
        const gpu: Gpu = item;
        this.addGpu(gpu);
        break;
    }
  }
  addCpu(cpu: Cpu){
    this.cpus.push(cpu);
  }
  addRam(ram: Ram){
    this.rams.push(ram);
  }
  addMotherboard(motherboard: Motherboard){
    this.motherboards.push(motherboard);
  }
  addGpu(gpu: Gpu){
    this.gpus.push(gpu);
  }

  editItem(id: string, item: Item){
    const type = id.substr(0, 1);
    switch (type){
      case 'c':
        // @ts-ignore
        const cpu: Cpu = item;
        this.editCpu(id, cpu);
        break;
      case 'r':
        // @ts-ignore
        const ram: Ram = item;
        this.editRam(id, ram);
        break;
      case 'm':
        // @ts-ignore
        const motherboard: Motherboard = item;
        this.editMotherboard(id, motherboard);
        break;
      case 'g':
        // @ts-ignore
        const gpu: Gpu = item;
        this.editGpu(id, gpu);
        break;
    }
  }
  editCpu(id: string, cpu: Cpu){
    this.cpus[this.getItemIndex(cpu.type, id)] = cpu;
  }
  editRam(id: string, ram: Ram){
    this.rams[this.getItemIndex(ram.type, id)] = ram;
  }
  editMotherboard(id: string, motherboard: Motherboard){
    this.motherboards[this.getItemIndex(motherboard.type, id)] = motherboard;
  }
  editGpu(id: string, gpu: Gpu){
    this.gpus[this.getItemIndex(gpu.type, id)] = gpu;
  }
}
