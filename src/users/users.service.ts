import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    async createUser(name: string, email: string, password: string) {
        const user = this.userRepository.create({ name, email, password });
        return this.userRepository.save(user);
    }

    async getUserById(id: number) {
        return this.userRepository.findOne({ where: { id } });
    }
}
