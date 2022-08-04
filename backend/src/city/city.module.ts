import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CityModel } from './schema/city.schema';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'City', schema: CityModel }]),
    HttpModule,
  ],
  providers: [CityService],
  controllers: [CityController],
})
export class CityModule {}
