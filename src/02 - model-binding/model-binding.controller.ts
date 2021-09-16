import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Headers,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('model-binding')
export class ModelBindingController {
  constructor() {}

  @Get('read-param')
  public readRouteParam(id: string) {}

  @Post('read-body')
  public readBody(body: unknown) {}

  @Get('statically-read-header')
  public readStaticHeader(header: string) {}

  @Get('dynamically-read-header/:header')
  public readHeaderParam(@Param('header') headerKey: string) {}
}
