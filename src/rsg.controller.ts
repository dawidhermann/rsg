import { Controller, Get, Param } from '@nestjs/common';
import { RsgService } from './rsg.service';
import { RsgItem } from './RsgItem';

@Controller('rsg')
export class RsgController {
  constructor(private readonly rsgService: RsgService) {}

  @Get()
  getAll(): RsgItem[] {
    return this.rsgService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rsgService.findRsgItem(Number(id));
  }
}
