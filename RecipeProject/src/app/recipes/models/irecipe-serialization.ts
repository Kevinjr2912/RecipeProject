import { ICategoryRecipeSerialization } from './icategory-recipe-serialization';
import { IIngredientsReceiveSerialization } from './iingredients-receive-serialization';
import { ITypeDifficultySerialization } from './itype-difficulty-serialization';

export interface IRecipeSerialization {
    name_recipe: string;
    description: string;
    preparation: string;
    time_duration: string;
    number_portion: number;
    type_difficulty: ITypeDifficultySerialization;
    category_recipe: ICategoryRecipeSerialization;
    ingredients: IIngredientsReceiveSerialization[]
}
