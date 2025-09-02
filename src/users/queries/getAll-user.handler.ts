import { IQuery, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllUsersQuery } from "./getAll-user.query";
import { UsersService } from "../users.service";

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersHandler implements IQueryHandler<GetAllUsersQuery> {
    constructor(private readonly usersService: UsersService) { }

    async execute(query: GetAllUsersQuery) {
        return this.usersService.getAllUsers();
    }
}