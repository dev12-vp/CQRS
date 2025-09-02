import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './commands/create-user.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { GetUserHandler } from './queries/get-user.handler';
import { GetAllUsersQuery } from './queries/getAll-user.query';
import { GetAllUsersHandler } from './queries/getAll-user.handler';
import { DeleteUserHandler } from './commands/delete-user.handler';

const CommandHandlers = [CreateUserHandler, DeleteUserHandler];
const QueryHandlers = [GetUserHandler, GetAllUsersHandler];

@Module({
  imports: [CqrsModule,TypeOrmModule.forFeature([User])],
  providers: [UsersService, ...CommandHandlers, ...QueryHandlers],
  controllers: [UsersController]
})
export class UsersModule { }
