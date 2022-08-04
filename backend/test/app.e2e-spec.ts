import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
// import { CityModule } from '../src/city/city.module';
import { AppModule } from '../src/app.module';
import { CityModel } from '../src/city/schema/city.schema';

describe('CityController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cities/search (GET)', () => {
    return request(app.getHttpServer())
      .get('/cities/search')
      .expect(200)
      .expect(typeof CityModel);
  });
});
