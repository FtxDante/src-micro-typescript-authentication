import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { LoginDTO } from 'src/interfaces/dtos/login.dto';
import { UserDTO } from 'src/interfaces/dtos/user.dto';
import { LoginResponse } from 'src/interfaces/login-response.interface';
import { AuthenticationService } from 'src/services/authentication.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  /* @Post('login')
  async login(@Body() loginBody: LoginDTO): Promise<void> {} */

  @Post('/register')
  async registerUser(@Body() userBody: UserDTO) {
    return this.authenticationService.createUser(userBody);
  }
}
