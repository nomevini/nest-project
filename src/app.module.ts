import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { productModule } from './products/products.module';

@Module({
  imports: [UserModule, productModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
