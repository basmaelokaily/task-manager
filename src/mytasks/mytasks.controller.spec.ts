import { Test, TestingModule } from '@nestjs/testing';
import { MytasksController } from './mytasks.controller';
import { MytasksService } from './mytasks.service';

describe('MytasksController', () => {
  let controller: MytasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MytasksController],
      providers: [MytasksService],
    }).compile();

    controller = module.get<MytasksController>(MytasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
