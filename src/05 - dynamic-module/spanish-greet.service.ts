import { GreetAbstractService } from './greet-abstract.service';

export class SpanishGreetService extends GreetAbstractService {
  greet(): string {
    return 'Hola';
  }
}
