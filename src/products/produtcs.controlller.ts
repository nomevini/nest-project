import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProductController {
  @Get('/create')
  create() {
    return 'Produto criado';
  }
}
