import { Module } from '@nestjs/common';
import { CustomProviderAbstractService } from './custom-provider.service';
import { MyCustomProviderService } from './my-custom-provider.service';

@Module({
  providers: [],
})
export class CustomProviderModule {}
