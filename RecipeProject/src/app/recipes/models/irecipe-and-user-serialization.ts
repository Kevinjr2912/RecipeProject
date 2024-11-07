import { IRecipeSerialization } from "./irecipe-serialization";
import { IUserSerialization } from "./iuser-serialization";

export interface IRecipeAndUserSerialization {
    person: IUserSerialization,
    recipe: IRecipeSerialization
}
