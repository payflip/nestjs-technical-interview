import { Controller, Get, HttpCode, Post, Redirect } from '@nestjs/common';

@Controller('routing')
export class RoutingController {
  constructor() {}

  public defaultRoute() {}

  public firstPathRoute() {}

  public wildCardRoute() {}

  public redirectToPayflip() {}
}
