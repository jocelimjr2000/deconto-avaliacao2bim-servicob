import { Controller, Get, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import RabbitmqServer from './rabbitmq-server';
import { data1 }from './main';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('folha/listar')
  getListar(): string {
    return data1.toString();
  }

  @Get('folha/total')
  getTotal(): object {
    
    let tot = 0;

    // data1.forEach(element => {
    //   var y: number = +element.valor;

    //   tot += (double) element.valor;
    // });
    
    return {
      salarioBruto: tot
    };
  }
 
  @Get('folha/media')
  getMedia(): string {
    return data1.toString();
  }
}
