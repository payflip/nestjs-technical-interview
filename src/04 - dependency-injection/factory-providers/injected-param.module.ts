import { Module } from '@nestjs/common';
import { FactoryProviderService } from './factory-provider.service';

export const PARAM_TOKEN = 'PARAM_TOKEN';

@Module({
  providers: [],
})
export class InjectedParamModule {}
