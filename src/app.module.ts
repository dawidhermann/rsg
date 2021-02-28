import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RsgModule } from './rsg/rsg.module';

@Module({
  imports: [RsgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
