import { Controller, Body, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model/user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @Get('/users')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/user/:id')
  getUser(@Param() params) {
    return this.userService.findUser(params.id);
  }

  @Delete('/user/:id')
  deleteUser(@Param() params) {
    return this.userService.deleteUser(params.id);
  }
}
