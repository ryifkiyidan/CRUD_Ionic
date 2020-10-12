import {Item} from './item.model';

export interface Cpu extends Item{
    base_clock: string;
    boost_clock: string;
    core_count: string;
    thread_count: string;
}
