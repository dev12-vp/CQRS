import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUserQuery } from './queries/get-user.handler';

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
}
