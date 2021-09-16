import { Test } from '@nestjs/testing';
import { StandardProviderModule } from '../../src/04 - dependency-injection/standard-providers/standard-provider.module';

describe('Standard provider injection', () => {
  it('should instanciate module', async () => {
    /** uncomment the following block of comment if you need logs about the failure */
    // Test.createTestingModule({
    //   imports: [StandardProviderModule],
    // }).compile();

    await expect(
      Test.createTestingModule({
        imports: [StandardProviderModule],
      }).compile(),
    ).toResolve();
  });
});
