import {Item} from './item.model';

export interface Cpu extends Item{
    baseClock: string;
    boostClock: string;
    coreCount: string;
    threadCount: string;
}
