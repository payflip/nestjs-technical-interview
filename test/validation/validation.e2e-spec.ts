import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ValidationModule } from '../../src/03 - validation/validation.module';
import * as request from 'supertest';

describe('Validation controller', () => {
  let app: INestApplication;
  const base = 'validation';
  const correctPayload = { name: 'Jon', isAdult: true, children: 0 };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ValidationModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  describe('when sending request', () => {
    it('should not fail when sending correct payload', () => {
      return request(app.getHttpServer())
        .post(`/${base}/12345`)
        .send({ ...correctPayload })
        .expect(201);
    });

    it('should validate "id" route param as number', () => {
      return request(app.getHttpServer())
        .post(`/${base}/test`)
        .send({ ...correctPayload })
        .expect(400);
    });

    it('should validate "name" body param as string', () => {
      return request(app.getHttpServer())
        .post(`/${base}/123`)
        .send({ ...correctPayload, name: 1 })
        .expect(400);
    });

    it('should validate "isAdult" body param as boolean', () => {
      return request(app.getHttpServer())
        .post(`/${base}/123`)
        .send({ ...correctPayload, isAdult: 'true' })
        .expect(400);
    });
  });
});
