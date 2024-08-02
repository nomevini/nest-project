import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [UserModule, HomeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
