import { Module } from '@nestjs/common';
import { NewspaperService } from './newspaper.service';
import { NewspaperController } from './newspaper.controller';
import { Newspaper } from './models/newspaper.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Newspaper])],
  controllers: [NewspaperController],
  providers: [NewspaperService],
})
export class NewspaperModule {}
