import { DynamicModule } from '@nestjs/common';
import { DutchGreetService } from './dutch-greet.service';
import { EnglishGreetService } from './english-greet.service';
import { FrenchGreetService } from './french-greet.service';
import { GreetAbstractService } from './greet-abstract.service';
import { SpanishGreetService } from './spanish-greet.service';

export enum Language {
  FR,
  EN,
  ES,
  NL,
}

export class GreetingI18nModule {
  static register(language: Language): DynamicModule {
    return { module: Object };
  }
}
