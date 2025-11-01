import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './database/database.module';
import { MytasksModule } from './mytasks/mytasks.module';

@Module({
  imports: [TasksModule, DatabaseModule, MytasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
