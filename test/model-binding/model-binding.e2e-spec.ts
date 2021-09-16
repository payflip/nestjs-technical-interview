import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ModelBindingModule } from '../../src/02 - model-binding/model-binding.module';
import * as request from 'supertest';

describe('Model binding controller', () => {
  let app: INestApplication;
  const base = 'model-binding';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ModelBindingModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should bind the "id" param on the route and return it', () => {
    return request(app.getHttpServer())
      .get(`/${base}/read-param/my-amazing-id`)
      .expect(200)
      .expect('my-amazing-id');
  });

  it('should return the body of the request', () => {
    return request(app.getHttpServer())
      .post(`/${base}/read-body`)
      .send({ hello: 'world' })
      .expect({ hello: 'world' });
  });

  describe('when statically reading a header', () => {
    it('should return the "x-static-x" header', () => {
      return request(app.getHttpServer())
        .get(`/${base}/statically-read-header`)
        .set('x-static-x', 'Hello World!')
        .expect('Hello World!');
    });
  });

  describe('when dynamically reading a header', () => {
    it('should return the value of the "x-hello-x" header', () => {
      return request(app.getHttpServer())
        .get(`/${base}/dynamically-read-header/x-hello-x`)
        .set('x-hello-x', 'Hello World!')
        .expect('Hello World!');
    });

    it('should return the value of the "x-allo-x" header', () => {
      return request(app.getHttpServer())
        .get(`/${base}/dynamically-read-header/x-allo-x`)
        .set('x-allo-x', 'Allô le monde!')
        .expect('Allô le monde!');
    });
  });
});
