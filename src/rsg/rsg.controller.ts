import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RsgService } from './rsg.service';
import { RsgItem } from './types/RsgItem';
import { CreateRsgItemDto } from './dto/CreateRsgItemDto';
import { UpdateRsgItemDto } from './dto/UpdateRsgItemDto';

@Controller('rsg')
export class RsgController {
  constructor(private readonly rsgService: RsgService) {}

  @Get()
  getAll(): RsgItem[] {
    return this.rsgService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const rsgItem = this.rsgService.findRsgItem(Number(id));
    if (rsgItem === undefined) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return rsgItem;
  }

  @Post()
  createRsgItem(@Body() createRsgItemDto: CreateRsgItemDto) {
    return this.rsgService.addRsgItem(createRsgItemDto);
  }

  @Put(':id')
  updateItem(
    @Param('id') id: string,
    @Body() updateRsgItemDto: UpdateRsgItemDto,
  ) {
    const result = this.rsgService.updateRngItem(Number(id), updateRsgItemDto);
    if (!result) {
      throw new HttpException('No Content', HttpStatus.NO_CONTENT);
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteItem(@Param('id') id: string) {
    const result = this.rsgService.deleteItem(Number(id));
    if (!result) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
