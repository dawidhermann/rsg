import { Injectable } from '@nestjs/common';
import { RsgItem } from './types/RsgItem';
import { rsgList } from './rsgList';
import { CreateRsgItemDto } from './dto/CreateRsgItemDto';
import { UpdateRsgItemDto } from './dto/UpdateRsgItemDto';

@Injectable()
export class RsgService {
  #rsgItems: RsgItem[] = [...rsgList];

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
}
