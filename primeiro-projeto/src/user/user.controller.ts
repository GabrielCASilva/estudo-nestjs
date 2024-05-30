import { Controller, Get } from '@nestjs/common';

// nest g controlller user
@Controller('user')
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }
}
