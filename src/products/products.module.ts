import { Module } from '@nestjs/common';
import { ProductController } from './produtcs.controlller';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [],
})
export class productModule {}
