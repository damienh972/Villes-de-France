import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCityDTO {
  @ValidateNested({ each: true })
  @Type(() => city)
  cities: city[];
}

class city {
  @IsString()
  readonly name: string;
  @IsString()
  readonly zip_code: string;
  @IsString()
  readonly isMetropolitan: boolean;
}
