import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';

import { METHOD_METADATA, PATH_METADATA } from '@nestjs/common/constants';

import { Reflector } from '@nestjs/core';
import { Request } from 'express';
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
    const req: Request = context.switchToHttp().getRequest();
    const cacheKey = `${req.method}${req.path}${JSON.stringify(
      req.params,
    )}${JSON.stringify(req.query)}${JSON.stringify(req.body)}`;

    //const cacheKey = `${context.getClass().name}.${context.getHandler().name}`;

    if (this._dummyCache.has(cacheKey)) {
      return this._dummyCache.get(cacheKey) as Observable<any>;
    }

    return next.handle().pipe(
      tap((data) => {
        this._dummyCache.set(cacheKey, data);
        return data;
      }),
    );
  }
}

export const Memoize = () => UseInterceptors(MemoizeInterceptor);
