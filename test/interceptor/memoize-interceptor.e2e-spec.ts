import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { InterceptorModule } from '../../src/06 - interceptor/interceptor.module';
import * as request from 'supertest';
import { ComputationService } from '../../src/06 - interceptor/computation.service';
import { PureController } from '../../src/06 - interceptor/pure.controller';

describe('Memoize interceptor', () => {
  let testingModule: TestingModule;
  let dummyCache: Map<string, unknown>;
  let app: INestApplication;
  let addFnSpy: jest.SpyInstance;
  let fibFnSpy: jest.SpyInstance;

  beforeEach(async () => {
    //arrange
    dummyCache = new Map();
    const service = new ComputationService();

    addFnSpy = jest.spyOn(service, 'add');
    fibFnSpy = jest.spyOn(service, 'fibonacci');

    testingModule = await Test.createTestingModule({
      imports: [InterceptorModule.register(dummyCache)],
      controllers: [PureController],
      providers: [
        {
          provide: ComputationService,
          useValue: service,
        },
      ],
    }).compile();

    app = testingModule.createNestApplication();

    await app.init();
  });

  describe('when "add" endpoint is called', () => {
    it('should cache the result', async () => {
      //act
      //assert
      await request(app.getHttpServer())
        .get('/pure/add?first=3&second=4')
        .expect('7')
        .then(() => expect(addFnSpy).toBeCalled())
        .then(() => expect([...dummyCache].length).toBe(1));

      addFnSpy.mockReset();

      await request(app.getHttpServer())
        .get('/pure/add?first=3&second=4')
        .expect('7')
        .then(() => expect(addFnSpy).not.toBeCalled())
        .then(() => expect([...dummyCache].length).toBe(1));

      await request(app.getHttpServer())
        .get('/pure/add?first=3&second=4')
        .expect('7')
        .then(() => expect(addFnSpy).not.toBeCalled())
        .then(() => expect([...dummyCache].length).toBe(1));
    });
  });

  describe('when "fibonacci" endpoint is called', () => {
    it('should cache the result', async () => {
      //act
      //assert
      await request(app.getHttpServer())
        .get('/pure/fibonacci?n=23')
        .expect('28657')
        .then(() => expect(fibFnSpy).toBeCalled())
        .then(() => expect([...dummyCache].length).toBe(1));

      fibFnSpy.mockReset();

      await request(app.getHttpServer())
        .get('/pure/fibonacci?n=23')
        .expect('28657')
        .then(() => expect(fibFnSpy).not.toBeCalled())
        .then(() => expect([...dummyCache].length).toBe(1));

      await request(app.getHttpServer())
        .get('/pure/fibonacci?n=23')
        .expect('28657')
        .then(() => expect(fibFnSpy).not.toBeCalled())
        .then(() => expect([...dummyCache].length).toBe(1));
    });
  });
});
