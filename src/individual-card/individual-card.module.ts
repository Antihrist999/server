import { Module } from '@nestjs/common';
import { IndividualCardService } from './individual-card.service';
import { IndividualCardController } from './individual-card.controller';
import { IndividualCard } from './models/individual-card.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([IndividualCard])],
  controllers: [IndividualCardController],
  providers: [IndividualCardService],
})
export class IndividualCardModule {}
