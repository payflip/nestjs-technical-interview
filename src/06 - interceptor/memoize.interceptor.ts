import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';

import { METHOD_METADATA } from '@nestjs/common/constants';

import { Reflector } from '@nestjs/core';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class MemoizeInterceptor implements NestInterceptor {
  constructor(
    @Inject(Map) private readonly _dummyCache: Map<string, unknown>,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle();
  }
}

export const Memoize = () => UseInterceptors(MemoizeInterceptor);
