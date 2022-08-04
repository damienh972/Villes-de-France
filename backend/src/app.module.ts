import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CityModule } from './city/city.module';
import 'dotenv/config';
console.log(process.env.MONGO_URI);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
    }),
    CityModule,
    HttpModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
