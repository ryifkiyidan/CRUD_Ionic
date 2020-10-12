import {Item} from './item.model';

export interface Motherboard extends Item{
    chipset: string;
    socket: string;
}
