import { AccessType, Category } from "../models/category.model";
// If minuscase is decorator, if not is a function
import { IsEnum, IsNotEmpty, IsUrl, Length, validateOrReject } from 'class-validator';

export interface CreateCategoryInterface extends Omit<Category, 'id'>{};

export class CreateCategoryDto implements CreateCategoryInterface {

  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsEnum(AccessType)
  access?: AccessType | undefined;

}

(async() => {
  try {
    const category = new CreateCategoryDto();
    category.name = 'Name';
    category.image = 'https://jinme.co';
    category.access = <AccessType>'private';
    console.log("That's fine!");
    await validateOrReject(category); 
  } catch (error) {
    console.log('Validation fail', error);
  }

})();