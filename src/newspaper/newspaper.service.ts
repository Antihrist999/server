import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Newspaper } from './models/newspaper.model';
import { CreateNewspaperDto } from './dto/create-newspaper.dto';

@Injectable()
export class NewspaperService {
  constructor(
    @InjectModel(Newspaper)
    private readonly newspaperModel: typeof Newspaper,
  ) {}

  create(createNewspaperDto: CreateNewspaperDto): Promise<Newspaper> {
    return this.newspaperModel.create({
      ...createNewspaperDto,
    });
  }
  update(createNewspaperDto: CreateNewspaperDto): Promise<Newspaper> {
    this.newspaperModel.update(
      { ...createNewspaperDto },
      { where: { id: createNewspaperDto.id } },
    );
    return this.newspaperModel.findOne({
      where: {
        id: createNewspaperDto.id,
      },
    });
  }

  async findAll(): Promise<Newspaper[]> {
    return this.newspaperModel.findAll({
      include: {
        all: true,
        where: {
          type: 'Newspaper',
        },
        required: false,
      },
    });
  }

  findOne(id: number): Promise<Newspaper> {
    return this.newspaperModel.findOne({
      where: {
        id,
      },
      include: { all: true },
    });
  }
  async remove(id: number): Promise<void> {
    const Newspaper = await this.findOne(id);
    await Newspaper.destroy();
  }
}
