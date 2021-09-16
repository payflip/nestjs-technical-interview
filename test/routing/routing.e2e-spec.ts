import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RoutingModule } from '../../src/01 - routing/routing.module';
import * as request from 'supertest';

describe('Routing controller', () => {
  let app: INestApplication;
  const base = 'routing';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RoutingModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('when doing GET requests', () => {
    it('should match the "/" route', () => {
      return request(app.getHttpServer()).get(`/${base}`).expect(200);
    });

    it('should match the "/first-path" route', () => {
      return request(app.getHttpServer())
        .get(`/${base}/first-path`)
        .expect(200);
    });

    describe('and using wildcards', () => {
      it('should match /dog', () => {
        return request(app.getHttpServer()).get(`/${base}/dog`).expect(200);
      });

      it('should match /abcdog', () => {
        return request(app.getHttpServer()).get(`/${base}/abcdog`).expect(200);
      });

      it('should match /dogabc', () => {
        return request(app.getHttpServer()).get(`/${base}/dogabc`).expect(200);
      });

      it('should match /abcdogefh', () => {
        return request(app.getHttpServer())
          .get(`/${base}/abcdogefh`)
          .expect(200);
      });
    });

    describe(`and calling the /redirect endpoint`, () => {
      it('should return a 302 status code', () => {
        return request(app.getHttpServer())
          .get(`/${base}/redirect`)
          .expect(302);
      });

      it('should redirect to https://payflip.be', () => {
        return request(app.getHttpServer())
          .get(`/${base}/redirect`)
          .expect('Location', 'https://payflip.be');
      });
    });
  });
});
