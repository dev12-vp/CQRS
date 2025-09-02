import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "./create-user.command";
import { UsersService } from "../users.service";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
 constructor(private readonly usersService: UsersService) {}

    async execute(command: CreateUserCommand) {
        const { name, email, password } = command;
        return this.usersService.createUser(name, email, password);
    }
}