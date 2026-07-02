import { Controller, Get } from '@nestjs/common';

@Controller('user') // decorator controller decorator
export class UserController {
  @Get()
  getUser() {
    return 'User data fetch successfully!!!!';
  }
}
