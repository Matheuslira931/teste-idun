import { UserDto } from './dto/user.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getFindAll() {
    return this.userService.FindAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() createClienteDto: UserDto) {
    return this.userService.create(createClienteDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UserDto) {
    return this.userService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
