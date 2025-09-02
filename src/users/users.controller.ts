import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUserQuery } from './queries/get-user.query';
import { GetAllUsersQuery } from './queries/getAll-user.query';
import { DeleteUserCommand } from './commands/delet-user.command';

@Controller('users')
export class UsersController {
    constructor(private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) { }

    @Post('createUser')
    async createUser(@Body() body: { name: string; email: string; password: string; }) {
        const { name, email, password } = body;
        return this.commandBus.execute(new CreateUserCommand(name, email, password));
    }

    @Get('getUser/:id')
    async getUser(@Param('id') id: string) {
        return this.queryBus.execute(new GetUserQuery(Number(id)));
    }

    @Get('getAllUsers')
    async getAllUsers() {
        return this.queryBus.execute(new GetAllUsersQuery());
    }

    @Delete('deleteUser/:id')
    async deleteUser(@Param('id') id: string) {
        return this.commandBus.execute(new DeleteUserCommand(Number(id)));
    }
}
