import { Controller, Res, HttpStatus, Get, Query } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {
    // this.cityService.getCityFromGouv();
  }

  @Get('/')
  async getAllEmployees(@Res() response, @Query('search') search) {
    const cities = await this.cityService.getFilteredCities(search);
    return response.status(HttpStatus.OK).json({
      cities,
    });
  }
}
