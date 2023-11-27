import { ApiProperty } from '@nestjs/swagger';

export class CreateNewspaperDto {
  @ApiProperty({ description: 'Идентификатор' })
  id: number;
  @ApiProperty({ description: 'Заголовок' })
  header: string;
  @ApiProperty({ description: 'Текст' })
  text: string;
}
