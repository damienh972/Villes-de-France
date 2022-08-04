import * as mongoose from 'mongoose';

const City = new mongoose.Schema({
  name: String,
  zip_code: String,
  isMetropolitan: Boolean,
});

export const CityModel = new mongoose.Schema({
  cities: [City],
});
