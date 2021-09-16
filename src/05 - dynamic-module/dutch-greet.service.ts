import { GreetAbstractService } from './greet-abstract.service';

export class DutchGreetService extends GreetAbstractService {
  greet(): string {
    return 'Hallo';
  }
}
