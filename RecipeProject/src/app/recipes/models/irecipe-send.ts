import { IIngredientSerialization } from "./iingredient-serialization";

export interface IRecipeSend {
  name_recipe: string;
  description: string;
  time_duration: string;
  id_difficulty: number;
  number_portion: number;
  id_category_recipe: number;
  ingredients: IIngredientSerialization[];
  preparation: string;
}
