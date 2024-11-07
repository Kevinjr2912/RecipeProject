import { IRecipeIngredientSerialization } from './irecipe-ingredient-serialization';

export interface IIngredientsReceiveSerialization {
    name_ingredient: string;
    RecipeIngredient: IRecipeIngredientSerialization 
}
