import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RsgService } from './rsg.service';
import { RsgItem } from './RsgItem';
import { CreateRsgItemDto } from './CreateRsgItemDto';

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

  @Post()
  createRsgItem(@Body() createRsgItemDto: CreateRsgItemDto) {
    return this.rsgService.addRsgItem(createRsgItemDto);
  }
}
