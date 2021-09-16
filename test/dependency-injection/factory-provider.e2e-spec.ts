import { Test, TestingModule } from '@nestjs/testing';
import {
  InjectedParamModule,
  PARAM_TOKEN,
} from '../../src/04 - dependency-injection/factory-providers/injected-param.module';
import { FactoryProviderService } from '../../src/04 - dependency-injection/factory-providers/factory-provider.service';
import { StaticParamModule } from '../../src/04 - dependency-injection/factory-providers/static-param.module';

describe('Factory provider injection', () => {
  describe('when the dependency is statically provided', () => {
    let testingModule: TestingModule;
    beforeAll(async () => {
      testingModule = await Test.createTestingModule({
        imports: [StaticParamModule],
      }).compile();
    });

    it('should return the value "Jon" on getName()', () => {
      //arrange
      const service = testingModule.get(FactoryProviderService);

      //act
      const name = service?.getName();

      //assert
      expect(service).toEqual(expect.anything());
      expect(name).toBe('Jon');
    });
  });

  describe('when the dependency in injected from the container', () => {
    let testingModule: TestingModule;

    const paramValue = 'Jonny';

    beforeAll(async () => {
      Object.assign(process.env, { PARAM_VALUE: paramValue });

      testingModule = await Test.createTestingModule({
        imports: [InjectedParamModule],
      }).compile();
    });

    it('should retrieve the PARAM_TOKEN instance', () => {
      //arrange
      //act
      const injectedValue = testingModule.get<string>(PARAM_TOKEN);

      //assert
      expect(injectedValue).toEqual(expect.anything());
    });

    it('should return the value provided by env on getName() execution', () => {
      //arrange
      const service = testingModule.get(FactoryProviderService);

      //act
      const name = service?.getName();

      //assert
      expect(service).toEqual(expect.anything());
      expect(name).toBe(paramValue);
    });
  });
});
