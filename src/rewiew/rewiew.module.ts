import { Module } from '@nestjs/common';
import { RewiewService } from './rewiew.service';
import { RewiewController } from './rewiew.controller';
import { Rewiew } from './models/rewiew.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Rewiew])],
  controllers: [RewiewController],
  providers: [RewiewService],
})
export class RewiewModule {}
