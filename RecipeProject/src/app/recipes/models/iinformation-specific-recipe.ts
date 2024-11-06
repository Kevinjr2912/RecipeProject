import { IIngredientsReceiveSerialization } from "./iingredients-receive-serialization";
import { ITypeDifficultySerialization } from "./itype-difficulty-serialization";

export interface IInformationSpecificRecipe {
    name_recipe: string,
    description: string,
    preparation: string,
    time_duration: string,
    number_portion: number,
    TypeDifficulty: ITypeDifficultySerialization,
    Ingredients: IIngredientsReceiveSerialization[]
}


