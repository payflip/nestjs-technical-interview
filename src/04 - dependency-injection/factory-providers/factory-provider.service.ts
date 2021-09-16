import { Injectable } from '@nestjs/common';

@Injectable()
export class FactoryProviderService {
  constructor(private readonly _name: string) {}

  public getName() {
    return this._name;
  }
}
