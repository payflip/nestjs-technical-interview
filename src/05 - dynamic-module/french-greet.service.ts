import { GreetAbstractService } from './greet-abstract.service';

export class FrenchGreetService extends GreetAbstractService {
  greet(): string {
    return 'Bonjour';
  }
}
