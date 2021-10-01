import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User as UserModel } from '@prisma/client';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.getUsers();
  }

  @Post('users/create')
  async createUser(
    @Body() userData: { name: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  @Put('user/:id/update')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: { name: string; email: string; bio?: string },
  ): Promise<UserModel> {
    return this.userService.updateUser({
      data: userData,
      where: { id: Number(id) },
    });
  }
}
