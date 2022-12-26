import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationController } from './controllers/authentication.controller';
import { User } from './entity/users/user.entity';
import { UserRepository } from './repositories/userRepository';
import { AuthenticationService } from './services/authentication.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'users_preprod',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UserRepository],
})
export class AppModule {}
