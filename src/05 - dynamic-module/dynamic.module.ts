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
    switch (language) {
      case Language.FR: {
        return {
          module: FrenchGreetService,
          providers: [
            { provide: GreetAbstractService, useClass: FrenchGreetService },
          ],
        };
      }
      case Language.NL: {
        return {
          module: DutchGreetService,
          providers: [
            { provide: GreetAbstractService, useClass: DutchGreetService },
          ],
        };
      }
      case Language.ES: {
        return {
          module: SpanishGreetService,
          providers: [
            { provide: GreetAbstractService, useClass: SpanishGreetService },
          ],
        };
      }
      default: {
        return {
          module: EnglishGreetService,
          providers: [
            { provide: GreetAbstractService, useClass: EnglishGreetService },
          ],
        };
      }
    }
  }
}
