import { Module } from '@nestjs/common';
import { StandardProviderController } from './standard-provider.controller';
import { StandardProviderService } from './standard-provider.service';

@Module({
  controllers: [StandardProviderController],
  providers: [StandardProviderService],
})
export class StandardProviderModule {}
