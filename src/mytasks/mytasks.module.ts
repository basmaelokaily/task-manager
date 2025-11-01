import { Module } from '@nestjs/common';
import { MytasksService } from './mytasks.service';
import { MytasksController } from './mytasks.controller';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [MytasksController],
  providers: [MytasksService],
})
export class MytasksModule {}
