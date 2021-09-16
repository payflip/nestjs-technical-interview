import { Module } from '@nestjs/common';
import { FactoryProviderService } from './factory-provider.service';

@Module({
  providers: [
    {
      provide: FactoryProviderService,
      useFactory: () => {
        return new FactoryProviderService('Jon');
      },
    },
  ],
})
export class StaticParamModule {}
