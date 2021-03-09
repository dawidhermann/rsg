import { Inject, Injectable } from '@nestjs/common';
import { RsgItem } from './types/RsgItem';
import { rsgList } from './rsgList';
import { CreateRsgItemDto } from './dto/CreateRsgItemDto';
import { UpdateRsgItemDto } from './dto/UpdateRsgItemDto';
import { RandomNumberGenerator } from './types/RandomNumberGenerator';

@Injectable()
export class RsgService {
  #rsgItems: RsgItem[] = [...rsgList];
  #rng: RandomNumberGenerator;

  constructor(@Inject('RNG') rng: RandomNumberGenerator) {
    this.#rng = rng;
  }

  getAll(): RsgItem[] {
    return this.#rsgItems;
  }

  findRsgItem(id: number): RsgItem {
    return this.#rsgItems.find((item) => item.id === id);
  }

  addRsgItem(item: CreateRsgItemDto): number {
    const lastId = Math.max(...this.#rsgItems.map((item) => item.id));
    const newId = lastId + 1;
    this.#rsgItems.push({ id: newId, content: item.content });
    return newId;
  }

  updateRngItem(id: number, updateRsgItemDto: UpdateRsgItemDto): boolean {
    const item = this.findRsgItem(id);
    if (item === undefined) {
      return false;
    }
    this.#rsgItems = this.#rsgItems.reduce((acc, item) => {
      if (item.id === id) {
        return [...acc, { id, ...updateRsgItemDto }];
      }
      return [...acc, item];
    }, [] as RsgItem[]);
    return true;
  }

  deleteItem(id: number): boolean {
    const hasItem = this.findRsgItem(id);
    if (hasItem === undefined) {
      return false;
    }
    this.#rsgItems = this.#rsgItems.filter((item) => item.id !== id);
    return true;
  }

  getRandomItem(): RsgItem {
    const index = this.#rng.generate(0, this.#rsgItems.length - 1);
    return this.#rsgItems[index];
  }
}
