import { Controller, Get, HttpCode, Post, Redirect } from '@nestjs/common';

@Controller('routing')
export class RoutingController {
  constructor() {}

  @Get('/')
  public defaultRoute() {}

  @Get('/first-path')
  public firstPathRoute() {}

  @Get('/redirect')
  @Redirect('https://payflip.be', 302)
  public redirectToPayflip() {}

  @Get('/*')
  public wildCardRoute() {}
}
