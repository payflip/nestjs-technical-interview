import { Controller, Get, Inject, ParseIntPipe, Query } from '@nestjs/common';
import { ComputationService } from './computation.service';
import { Memoize } from './memoize.interceptor';

@Controller('pure')
@Memoize()
export class PureController {
  constructor(
    @Inject(ComputationService) private readonly _service: ComputationService,
  ) {}

  @Get('add')
  public add(
    @Query('first', ParseIntPipe) first: number,
    @Query('second', ParseIntPipe) second: number,
  ) {
    return this._service.add(first, second);
  }

  @Get('fibonacci')
  public fibonacci(@Query('n', ParseIntPipe) n: number): number {
    return this._service.fibonacci(n);
  }
}
