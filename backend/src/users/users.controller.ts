import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  async getAllUsers(): Promise<UserModel[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.getUsersById({ id: Number(id) });
  }

  @Post('create')
  async createUser(
    @Body() userData: { name: string; email: string },
  ): Promise<UserModel> {
    return this.usersService.createUser(userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.deleteUser({ id: Number(id) });
  }

  @Put(':id/update')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: { name: string; email: string; bio?: string },
  ): Promise<UserModel> {
    return this.usersService.updateUser({
      data: userData,
      where: { id: Number(id) },
    });
  }
}
