import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecipeSend } from '../models/irecipe-send';
import { Observable } from 'rxjs';
import { ITitleRecipeReceived } from '../models/ititle-recipe-received';
import { IRecipeReceiveeToUpdate } from '../models/irecipe-receivee-to-update';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private urlAPI = 'http://54.173.47.98/recipes';

  constructor(private http: HttpClient) {}

  // Methods Create
  public createRecipe(recipe: IRecipeSend): Observable<void> {
    return this.http.post<void>(
      `${this.urlAPI}/createRecipe/${recipe.id_person}`,
      recipe
    );
  }

  // Methods Read
  public getRecipesPublished(
    id_person: number
  ): Observable<ITitleRecipeReceived[]> {
    return this.http.post<ITitleRecipeReceived[]>(
      `${this.urlAPI}/getRecipesPublished/${id_person})`,
      {}
    );
  }

  public getDatailsRecipeAndPerson(id_recipe: number): Observable<any> {
    return this.http.post<any>(
      `${this.urlAPI}/getInformationPersonWithRecipe/1/${id_recipe}`,
      {}
    );
  }

  public getinformationRecipe(
    id_recipe: number
  ): Observable<IRecipeReceiveeToUpdate> {
    return this.http.post<IRecipeReceiveeToUpdate>(
      `${this.urlAPI}/getRecipe/${id_recipe}`,
      {}
    );
  }

  // Methods Update
  public updateInformationRecipe(id_recipe: number, recipeToUpdate: IRecipeSend): Observable<any> {
    return this.http.put<any>(`${this.urlAPI}/updateRecipe/${id_recipe}`, recipeToUpdate);
  }

  // Methods Delete
  public deteleRecipe(id_recipe: number): Observable<void> {
    return this.http.delete<void>(
      `${this.urlAPI}/deleteRecipe/${id_recipe}`,
      {}
    );
  }
}
