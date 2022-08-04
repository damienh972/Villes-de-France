import { Document } from 'mongoose';

export interface City extends Document {
  cities: CityDatas[];
}

export interface CityDatas {
  readonly name: string;
  readonly zip_code: string;
  readonly isMetropolitan: boolean;
}
