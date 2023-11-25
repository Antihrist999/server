import { Module } from '@nestjs/common';
import { NewspaperService } from './newspaper.service';
import { NewspaperController } from './newspaper.controller';

@Module({
  controllers: [NewspaperController],
  providers: [NewspaperService],
})
export class NewspaperModule {}
