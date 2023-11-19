import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя' })
  firstName: string;
  @ApiProperty({ description: 'Фамилия' })
  lastName: string;
  @ApiProperty({ description: 'Статус' })
  isActive: boolean;
  @ApiProperty({ description: 'Почтовый адрес' })
  email: string;
}
