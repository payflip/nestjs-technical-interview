import { Module } from '@nestjs/common';
import { CustomProviderAbstractService } from './custom-provider.service';
import { MyCustomProviderService } from './my-custom-provider.service';

@Module({
  providers: [
    {
      provide: CustomProviderAbstractService,
      useClass: MyCustomProviderService,
    },
  ],
})
export class CustomProviderModule {}
