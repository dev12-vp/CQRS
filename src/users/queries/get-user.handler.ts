import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UsersService } from "../users.service";
import { GetUserQuery } from "./get-user.query";

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
    constructor(private readonly usersService: UsersService) { }

    async execute(query: GetUserQuery) {
        const { id } = query;
        return this.usersService.getUserById(id);
    }
}