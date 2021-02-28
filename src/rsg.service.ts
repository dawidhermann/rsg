import { Injectable } from '@nestjs/common';
import { RsgItem } from './RsgItem';
import { rsgList } from './rsgList';

@Injectable()
export class RsgService {
  #rsgItems: RsgItem[] = [...rsgList];

  getAll(): RsgItem[] {
    return this.#rsgItems;
  }

  findRsgItem(id: number): RsgItem {
    return this.#rsgItems.find((item) => item.id === id);
  }
}
