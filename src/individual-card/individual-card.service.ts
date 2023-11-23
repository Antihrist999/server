import { Injectable } from '@nestjs/common';
import { CreateIndividualCardDto } from './dto/create-individual-card.dto';
import { IndividualCard } from './models/individual-card.model';
import { InjectModel } from '@nestjs/sequelize';
/* import { UpdateIndividualCardDto } from './dto/update-individual-card.dto'; */
/* import { UpdateIndividualCardDto } from './dto/update-individual-card.dto'; */

@Injectable()
export class IndividualCardService {
  constructor(
    @InjectModel(IndividualCard)
    private readonly IndividualCardModule: typeof IndividualCard,
  ) {}
  async upsert(createIndividualCardDto: CreateIndividualCardDto) {
    const userCard = await this.IndividualCardModule.findOne({
      where: {
        userId: createIndividualCardDto.userId,
      },
    });
    if (!userCard) {
      await this.IndividualCardModule.create({
        account: createIndividualCardDto.account
          ? createIndividualCardDto.account
          : 0,
        userId: createIndividualCardDto.userId,
      });
    } else {
      await this.IndividualCardModule.update(
        { ...createIndividualCardDto },
        { where: { userId: createIndividualCardDto.userId } },
      );
    }
    return this.findByUserId(createIndividualCardDto.userId);
  }

  async findAll(): Promise<IndividualCard[]> {
    return this.IndividualCardModule.findAll();
  }

  findOne(id: number): Promise<IndividualCard> {
    return this.IndividualCardModule.findOne({
      where: {
        id,
      },
    });
  }
  findByUserId(userId: number): Promise<IndividualCard> {
    return this.IndividualCardModule.findOne({
      where: {
        userId,
      },
    });
  }
  /*   update(id: number, updateIndividualCardDto: UpdateIndividualCardDto) {
    return `This action updates a #${id} individualCard`;
  } */

  remove(id: number) {
    return `This action removes a #${id} individualCard`;
  }
}
