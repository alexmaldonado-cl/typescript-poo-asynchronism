import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from 'class-validator';

import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{ }

export class CreateCategoryDto implements ICreateCategoryDto {

  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}


(async ()=> {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'aqwqwqw';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    const response = await validateOrReject(dto);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();
