import { Test, TestingModule } from '@nestjs/testing';
import { LoginDTO } from 'src/interfaces/dtos/login.dto';
import { AuthenticationController } from './authentication.controller';

describe('AuthenticationController', () => {
  let controller: AuthenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should authenticate with success, and return a token', async () => {
    const token = await controller.login({} as LoginDTO);
    expect(token).toEqual({
      token:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJjb25zdWx0YS10b2tlbi13NzRidCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJjb25zdWx0YSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjI2YmMwNDRhLWFjNmQtNDZlYy1iN2M5LWVkMjE5ODJmNTNjMSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTpjb25zdWx0YSJ9.iBpZU_Gg7p-Leb7arz90CWz4HVfQyFku1SgdnNufqWw6XA_1m4FxmDQ1yt24GoRR_VIH_wGTTLsS9LRJZnea5wgIqQrbaeXdVQHt2Bi4D4PNRGL_PQNxIuzSAvZLd3miFOMDgQLvkjlExYPnPgy1MXrp8Da48V9uE0mNmn9Sfv-6kRGxq02fT1A7Bs2MDv8WWh_QXIPzIpESjmShvLvSeS1bx4DGt3C5rnEvDD3GJhLrwklOcW3U19FaR12QZIkIPYBx3qeEADq3BJi4AwGBQ9gXNfTgZzNMG8qt8P3JpEWwps_6YG6j3U8rJCBUplgjbB5-FghFHd4JPuA-RYDXkw',
    });
  });
});
