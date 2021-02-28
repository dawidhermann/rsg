import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RsgController } from './rsg.controller';
import { RsgService } from './rsg.service';

@Module({
  imports: [],
  controllers: [AppController, RsgController],
  providers: [AppService, RsgService],
})
export class AppModule {}
