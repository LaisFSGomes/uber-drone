import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model/user.model';
import { Server } from 'socket.io';
import { WebSocketServer, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@Controller('user')
@WebSocketGateway()
export class UserController {
  constructor(
    private userService: UserService, // @Inject('socket') private socket: Socket,
  ) {}
  // @WebSocketServer()
  // server: Server;

  @Post('/create')
  createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @Get('/users')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get('/user/:name')
  getUserByName(@Param() params) {
    return this.userService.findUserByName(params.name);
  }

  @Get('/:id')
  getUser(@Param() params) {
    return this.userService.findUser(params.id);
  }

  @Delete('/user/:id')
  deleteUser(@Param() params) {
    return this.userService.deleteUser(params.id);
  }
}
