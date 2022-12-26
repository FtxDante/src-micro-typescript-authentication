import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/interfaces/dtos/user.dto';
import { User } from 'src/interfaces/user.interface';
import { UserRepository } from 'src/repositories/userRepository';
import { AutoMapper } from 'src/utils/auto-mapper';

@Injectable()
export class AuthenticationService {
  constructor(private userRepository: UserRepository) {}

  // async login(): Promise<any> {}

  async createUser(userDto: UserDTO) {
    const user: User = AutoMapper.toUser(userDto);
    return this.userRepository.save(user);
  }
}
