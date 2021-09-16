import { Test } from '@nestjs/testing';
import { DutchGreetService } from '../../src/05 - dynamic-module/dutch-greet.service';
import { GreetAbstractService } from '../../src/05 - dynamic-module/greet-abstract.service';
import {
  GreetingI18nModule,
  Language,
} from '../../src/05 - dynamic-module/dynamic.module';
import { FrenchGreetService } from '../../src/05 - dynamic-module/french-greet.service';
import { EnglishGreetService } from '../../src/05 - dynamic-module/english-greet.service';
import { SpanishGreetService } from '../../src/05 - dynamic-module/spanish-greet.service';

describe('Dynamic module', () => {
  describe('when configure with "NL" language', () => {
    it('should provide expected instance type', async () => {
      //arrange
      const testingModule = await Test.createTestingModule({
        imports: [GreetingI18nModule.register(Language.NL)],
      }).compile();

      //act
      //assert
      const greetService = testingModule.get(GreetAbstractService);
      expect(greetService).toEqual(expect.anything());
      expect(greetService instanceof DutchGreetService).toBe(true);
    });
  });
  describe('when configure with "FR" language', () => {
    it('should provide expected instance type', async () => {
      //arrange
      const testingModule = await Test.createTestingModule({
        imports: [GreetingI18nModule.register(Language.FR)],
      }).compile();

      //act
      //assert
      const greetService = testingModule.get(GreetAbstractService);
      expect(greetService).toEqual(expect.anything());
      expect(greetService instanceof FrenchGreetService).toBe(true);
    });
  });
  describe('when configure with "EN" language', () => {
    it('should provide expected instance type', async () => {
      //arrange
      const testingModule = await Test.createTestingModule({
        imports: [GreetingI18nModule.register(Language.EN)],
      }).compile();

      //act
      //assert
      const greetService = testingModule.get(GreetAbstractService);
      expect(greetService).toEqual(expect.anything());
      expect(greetService instanceof EnglishGreetService).toBe(true);
    });
  });
  describe('when configure with "ES" language', () => {
    it('should provide expected instance type', async () => {
      //arrange
      const testingModule = await Test.createTestingModule({
        imports: [GreetingI18nModule.register(Language.ES)],
      }).compile();

      //act
      //assert
      const greetService = testingModule.get(GreetAbstractService);
      expect(greetService).toEqual(expect.anything());
      expect(greetService instanceof SpanishGreetService).toBe(true);
    });
  });
});
