import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class CustomProviderAbstractService {
  public abstract greet(): string;
}
