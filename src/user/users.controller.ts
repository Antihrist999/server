import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Пользователь')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать пользователя',
  })
  @ApiResponse({ status: 200, type: User })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
  @ApiOperation({
    summary: 'Получить список пользователей',
  })
  @Get()
  @ApiResponse({ status: 200, type: [User] })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @ApiOperation({
    summary: 'Получить пользователя по ид',
  })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
  @ApiOperation({
    summary: 'Удалить пользователя',
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
