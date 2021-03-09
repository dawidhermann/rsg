import { Module } from '@nestjs/common';
import { RsgController } from './rsg.controller';
import { RsgService } from './rsg.service';
import { rng } from './utils/rng';

@Module({
  controllers: [RsgController],
  providers: [RsgService, { provide: 'RNG', useValue: rng }],
})
export class RsgModule {}
