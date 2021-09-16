import { Controller } from '@nestjs/common';
import { StandardProviderService } from './standard-provider.service';

@Controller()
export class StandardProviderController {
  constructor(public readonly _: StandardProviderService) {}
}
