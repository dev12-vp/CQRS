import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteUserCommand } from "./delet-user.command";
import { UsersService } from "../users.service";

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
    constructor(private readonly usersService: UsersService) {}

    async execute(command: DeleteUserCommand) {
        const { userId } = command;
        return this.usersService.deleteUser(userId);
    }
}