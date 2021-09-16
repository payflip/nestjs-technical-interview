/** THIS FILE DOES NOT NEED TO BE MODIFIED */

import { Module } from '@nestjs/common';
import { ModelBindingController } from './model-binding.controller';

@Module({
  controllers: [ModelBindingController],
  providers: [],
})
export class ModelBindingModule {}
