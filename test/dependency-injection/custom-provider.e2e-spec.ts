import { Test, TestingModule } from '@nestjs/testing';
import { CustomProviderAbstractService } from '../../src/04 - dependency-injection/custom-providers/custom-provider.service';
import { CustomProviderModule } from '../../src/04 - dependency-injection/custom-providers/custom-provider.module';
import { MyCustomProviderService } from '../../src/04 - dependency-injection/custom-providers/my-custom-provider.service';

describe('Custom provider injection', () => {
  let testingModule: TestingModule;

  beforeAll(async () => {
    testingModule = await Test.createTestingModule({
      imports: [CustomProviderModule],
    }).compile();
  });

  it('should inject custom implementation', () => {
    //arrange
    const customService = testingModule.get(CustomProviderAbstractService);

    //act
    const greet = customService?.greet();

    //arrange
    expect(customService instanceof MyCustomProviderService).toBe(true);
    expect(greet).toEqual(expect.anything());
    expect(greet).toBe(`Hola ¿Que Tal?`);
  });
});
