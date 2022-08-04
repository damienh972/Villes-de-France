import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
// import { HttpService } from '@nestjs/axios';
// import { lastValueFrom } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { City, CityDatas } from './interfaces/city.interface';
// import { CreateCityDTO } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectModel('City')
    private cityModel: Model<City>, // private readonly httpService: HttpService,
  ) {}

  // async addCities(createCityDTO: CreateCityDTO): Promise<City> {
  //   const cities = await new this.cityModel(createCityDTO);
  //   return cities.save();
  // }

  // ***** This function and all its commented dependancies were   ******
  // ***** used to import datas from www.data.gouv.fr in database. ******

  // async getCityFromGouv(): Promise<City> {
  //   const url =
  //     'https://www.data.gouv.fr/fr/datasets/r/34d4364c-22eb-4ac0-b179-7a1845ac033a';
  //   const { data } = await lastValueFrom(this.httpService.get(url));
  //   const domTom = [
  //     '971',
  //     '972',
  //     '973',
  //     '974',
  //     '975',
  //     '976',
  //     '984',
  //     '986',
  //     '987',
  //     '988',
  //   ];
  //   const filteredData = data.map((city) => ({
  //     name: city.nomCommune,
  //     zip_code: city.codePostal,
  //     isMetropolitan: !domTom.includes(city.codePostal.substring(0, 3)),
  //   }));
  //   await this.addCities({ cities: filteredData });
  //   console.log('done');
  //   return filteredData;
  // }

  async getFilteredCities(search): Promise<CityDatas[] | City[]> {
    const cities = await this.cityModel.find().exec();

    if (!search) {
      return cities[0].cities.slice(0, 100);
    }
    let filteredCities = cities[0].cities.filter(
      (city) =>
        city.name
          .toLowerCase()
          .slice(0, search.length)
          .includes(search.toLowerCase()) ||
        city.zip_code
          .toLowerCase()
          .slice(0, search.length)
          .includes(search.toLowerCase()),
    );
    filteredCities = filteredCities.filter(
      (elem, index, self) =>
        self.findIndex((t) => {
          return t.name === elem.name;
        }) === index,
    );
    function sortCities(x, y) {
      if (x.name < y.name) {
        return -1;
      }
      if (x.name > y.name) {
        return 1;
      }
      return 0;
    }
    return filteredCities.slice(0, 100).sort(sortCities);
  }
}
