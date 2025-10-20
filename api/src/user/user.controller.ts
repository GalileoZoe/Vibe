import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './dto/createuser.dto';
import { UpdateUser } from './dto/updateuser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() create(@Body() dto: CreateUser) {
    return this.userService.create(dto);
  }

  @Get() findAll() {
    return this.userService.findAll();
  }

  @Get(':id') findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdateUser) {
    return this.userService.update(id, dto);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
