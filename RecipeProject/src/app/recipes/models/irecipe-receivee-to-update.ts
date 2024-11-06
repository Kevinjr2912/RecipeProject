import { ICategoryRecipeSerialization } from './icategory-recipe-serialization';
import { IIngredienteUpdate } from './iingrediente-update';
import { ITypeDifficultySerialization } from './itype-difficulty-serialization';

export interface IRecipeReceiveeToUpdate {
  name_recipe: string;
  description: string;
  preparation: string;
  time_duration: string;
  number_portion: number;
  CategoryRecipe: ICategoryRecipeSerialization;
  TypeDifficulty: ITypeDifficultySerialization;
  Ingredients: IIngredienteUpdate[];
}