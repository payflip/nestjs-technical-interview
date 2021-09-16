import { DynamicModule } from '@nestjs/common';

export class InterceptorModule {
  static register(cache: Map<string, unknown>): DynamicModule {
    return {
      module: InterceptorModule,
      providers: [
        {
          provide: Map,
          useValue: cache,
        },
      ],
      exports: [Map],
    };
  }
}
