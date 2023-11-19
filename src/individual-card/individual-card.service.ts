import { Injectable } from '@nestjs/common';
import { CreateIndividualCardDto } from './dto/create-individual-card.dto';
import { IndividualCard } from './models/individual-card.model';
import { InjectModel } from '@nestjs/sequelize';
/* import { UpdateIndividualCardDto } from './dto/update-individual-card.dto'; */

@Injectable()
export class IndividualCardService {
  constructor(
    @InjectModel(IndividualCard)
    private readonly IndividualCardModule: typeof IndividualCard,
  ) {}
  create(createIndividualCardDto: CreateIndividualCardDto) {
    return this.IndividualCardModule.create({
      userId: createIndividualCardDto.userId,
      account: 0,
    });
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

  /*  update(id: number, updateIndividualCardDto: UpdateIndividualCardDto) {
    console.log(updateIndividualCardDto);
    return `This action updates a #${id} individualCard`;
  } */

  remove(id: number) {
    return `This action removes a #${id} individualCard`;
  }
}
