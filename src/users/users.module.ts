import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './commands/create-user.handler';
import { GetUserHandler } from './queries/get-user.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

const CommandHandlers = [CreateUserHandler];
const QueryHandlers = [GetUserHandler];

@Module({
  imports: [CqrsModule,TypeOrmModule.forFeature([User])],
  providers: [UsersService, ...CommandHandlers, ...QueryHandlers],
  controllers: [UsersController]
})
export class UsersModule { }
