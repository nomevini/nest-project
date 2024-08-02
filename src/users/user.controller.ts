import { Controller, Get, Param, Query } from '@nestjs/common';

type ParamsUser = {
  id: string;
  idEmpresa: string;
};

type QueryUser = {
  p: string;
  r: string;
};

@Controller()
export class UserController {
  /* 
  http:localhost/users/12423423/1312312s
  */
  @Get('/users/:id/:idEmpresa')
  findById(@Param() params: ParamsUser) {
    return `Usuario id ${params.id} - IdEmpresa ${params.idEmpresa}`;
  }

  /* 
  http:localhost:3000/users/findByPages?p=10&r=100
  */
  @Get('/users/findByPages')
  findByPages(@Query() queries: QueryUser) {
    return `Queries ${queries.p} - ${queries.r}`;
  }
}
