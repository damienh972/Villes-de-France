export interface City {
  name: string;
  zip_code: string;
  isMetropolitan: boolean;
  _id: string;
}

export interface Cities {
  filter: (e: any) => Cities;
  map: (e: any) => City;
  length: number;
  cities: City[];
}