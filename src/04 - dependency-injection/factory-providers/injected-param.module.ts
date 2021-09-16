import { Module } from '@nestjs/common';
import { FactoryProviderService } from './factory-provider.service';

export const PARAM_TOKEN = 'PARAM_TOKEN';

@Module({
  providers: [
    {
      provide: FactoryProviderService,
      useFactory: () => {
        return new FactoryProviderService('Jonny');
      },
    },
    {
      provide: PARAM_TOKEN,
      useExisting: FactoryProviderService,
    },
  ],
})
export class InjectedParamModule {}
