import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetUserQuery } from "./get-user.handler";
import { UsersService } from "../users.service";

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
    constructor(private readonly usersService: UsersService) { }

    async execute(query: GetUserQuery) {
        const { id } = query;
        return this.usersService.getUserById(id);
    }
}