import { ApiProperty } from '@nestjs/swagger';

export class CreatePictureDto {
  @ApiProperty({ description: 'Идентификатор' })
  id: number;
  @ApiProperty({ description: 'Изображение' })
  image: string;
  @ApiProperty({ description: 'Тип изображения' })
  type: string;
  @ApiProperty({ description: 'Идентификатор родителя' })
  parentId: number;
}
