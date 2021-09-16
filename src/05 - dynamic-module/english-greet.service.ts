import { GreetAbstractService } from './greet-abstract.service';

export class EnglishGreetService extends GreetAbstractService {
  greet(): string {
    return 'Hello';
  }
}
