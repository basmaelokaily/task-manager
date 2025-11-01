import { Test, TestingModule } from '@nestjs/testing';
import { MytasksService } from './mytasks.service';

describe('MytasksService', () => {
  let service: MytasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MytasksService],
    }).compile();

    service = module.get<MytasksService>(MytasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
