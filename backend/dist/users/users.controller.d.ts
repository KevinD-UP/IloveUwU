import { UsersService } from './users.service';
import { User as UserModel } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<UserModel[]>;
    getUserById(id: string): Promise<UserModel>;
    createUser(userData: {
        name: string;
        email: string;
    }): Promise<UserModel>;
    deleteUser(id: string): Promise<UserModel>;
    updateUser(id: string, userData: {
        name: string;
        email: string;
        bio?: string;
    }): Promise<UserModel>;
}
