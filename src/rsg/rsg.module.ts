import { Module } from '@nestjs/common';
import { RsgController } from './rsg.controller';
import { RsgService } from './rsg.service';

@Module({
  controllers: [RsgController],
  providers: [RsgService],
})
export class RsgModule {}
