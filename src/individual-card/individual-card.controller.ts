import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { IndividualCardService } from './individual-card.service';
import { CreateIndividualCardDto } from './dto/create-individual-card.dto';

@Controller('individualCard')
export class IndividualCardController {
  constructor(private readonly individualCardService: IndividualCardService) {}

  @Post()
  create(@Body() createIndividualCardDto: CreateIndividualCardDto) {
    return this.individualCardService.create(createIndividualCardDto);
  }

  @Get()
  findAll() {
    return this.individualCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.individualCardService.findOne(+id);
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndividualCardDto: UpdateIndividualCardDto) {
    return this.individualCardService.update(+id, updateIndividualCardDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.individualCardService.remove(+id);
  }
}
