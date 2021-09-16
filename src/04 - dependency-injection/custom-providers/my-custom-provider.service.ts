import { CustomProviderAbstractService } from './custom-provider.service';

export class MyCustomProviderService extends CustomProviderAbstractService {
  public greet(): string {
    return `Hola ¿Que Tal?`;
  }
}
