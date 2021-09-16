/** THIS FILE DOES NOT NEED TO BE MODIFIED */

import { Module } from '@nestjs/common';
import { RoutingController } from './routing.controller';

@Module({
  controllers: [RoutingController],
  providers: [],
})
export class RoutingModule {}
