import { instanceToPlain, plainToInstance } from 'class-transformer';
import { User } from 'src/entity/users/user.entity';
import { UserDTO } from 'src/interfaces/dtos/user.dto';

export class AutoMapper {
  static toUser(userDTO: UserDTO): User {
    const data = instanceToPlain(userDTO);
    return plainToInstance(User, data);
  }
}
