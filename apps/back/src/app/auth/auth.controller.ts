import { Body, Controller, Get, Post } from '@nestjs/common';
import { Throttle, days, seconds } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { Auth } from './decorators';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
@Throttle({ default: { limit: 2, ttl: days(1) } })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  @Throttle({ default: { limit: 8, ttl: seconds(5) } })
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('signUp')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.sendUserEmailValidation(signUpDto);
  }

  @Auth('admin')
  @Get('private')
  findAll() {
    return 'private route prr';
  }
}
