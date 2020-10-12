import { Injectable } from '@angular/core';
import {Cpu} from './cpu.model';
import {Ram} from './ram.model';
import {Motherboard} from './motherboard.model';
import {Gpu} from './gpu.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private cpus: Cpu[] = [
    {
      id: 'c1',
      imageUrl: '',
      brand: 'AMD',
      model: 'Ryzen Threadripper 3990X',
      base_clock: '2.9',
      boost_clock: '4.3',
      core_count: '64',
      thread_count: '128',
      price: '66.000.000',
      stock: '2'
    },
    {
      id: 'c2',
      imageUrl: '',
      brand: 'Intel',
      model: 'Xeon E5-2697',
      base_clock: '2.3',
      boost_clock: '3.6',
      core_count: '18',
      thread_count: '36',
      price: '77.835.000',
      stock: '2'
    },
    // {
    //   id: '',
    //   imageUrl: '',
    //   brand: '',
    //   model: '',
    //   base_clock: '',
    //   boost_clock: '',
    //   core_count: '',
    //   thread_count: '',
    //   price: '',
    //   stock: ''
    // },
  ];

  private rams: Ram[] = [
    {
      id: 'r1',
      imageUrl: '',
      brand: 'Corsair',
      model: 'Vengeance RGB Pro DDR4 2x8',
      speed: '3200',
      size: '16',
      price: '1.499.000',
      stock: '10'
    },
    {
      id: 'r2',
      imageUrl: '',
      brand: 'Team',
      model: 'T-Force Delta RGB DDR4 2x8',
      speed: '3000',
      size: '16',
      price: '1.313.000',
      stock: '10'
    },
    // {
    //   id: '',
    //   imageUrl: '',
    //   brand: '',
    //   model: '',
    //   speed: '',
    //   size: '',
    //   price: '',
    //   stock: ''
    // },
  ];

  private motherboards: Motherboard[] = [
    {
      id: 'm1',
      imageUrl: '',
      brand: 'Asus',
      model: 'ROG STRIX Z490-E GAMING',
      chipset: 'Intel Z490',
      socket: '1200',
      price: '5.550.000',
      stock: '5'
    },
    {
      id: 'm2',
      imageUrl: '',
      brand: 'MSI',
      model: 'MEG Z490 GODLIKE',
      chipset: 'Intel Z490',
      socket: '1200',
      price: '12.000.000',
      stock: '5'
    },
    // {
    //   id: '',
    //   imageUrl: '',
    //   brand: '',
    //   model: '',
    //   chipset: '',
    //   socket: '',
    //   price: '',
    //   stock: ''
    // },
  ];

  private gpus: Gpu[] = [
    {
      id: 'g1',
      imageUrl: '',
      brand: 'Nvidia',
      model: 'GEFORCE RTX 2070',
      price: '6.900.000',
      stock: '3'
    },
    {
      id: 'g2',
      imageUrl: '',
      brand: 'AMD',
      model: 'RADEON RX 5700-XT',
      price: '6.000.000',
      stock: '3'
    },
  ];

  constructor() { }

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
}
