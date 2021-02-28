import { Injectable } from '@nestjs/common';
import { RsgItem } from './RsgItem';
import { rsgList } from './rsgList';
import { CreateRsgItemDto } from './CreateRsgItemDto';

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
}
