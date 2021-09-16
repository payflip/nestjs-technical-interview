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

  @Get('read-param/:id')
  public readRouteParam(@Param('id') id: string) {
    return id;
  }

  @Post('read-body')
  public readBody(@Body() body: unknown) {
    return body;
  }

  @Get('statically-read-header')
  public readStaticHeader(@Headers('x-static-x') header: string) {
    return header;
  }

  @Get('dynamically-read-header/:header')
  public readHeaderParam(
    @Param('header') headerKey: string,
    @Req() req: Request,
  ) {
    return req.headers[headerKey];
  }
}
