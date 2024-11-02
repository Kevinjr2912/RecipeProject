import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecipeSend } from '../models/irecipe-send';
import { Observable } from 'rxjs';
import { ITitleRecipeReceived } from '../models/ititle-recipe-received';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private urlAPI = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient){}

  // Methods Create
  public createRecipe(recipe: IRecipeSend): Observable<void> {
    return this.http.post<void>(`${this.urlAPI}/createRecipe/${recipe.id_person}`, recipe);
  }

  // Methods Read
  public getRecipesPublished (id_person: number): Observable<ITitleRecipeReceived[]> {
    return this.http.post<ITitleRecipeReceived[]>(`${this.urlAPI}/getRecipesPublished/${id_person})`, {});
  }

  public getDatailsRecipeAndPerson(id_recipe: number): Observable<any> {
    return this.http.post<any>(`${this.urlAPI}/getInformationPersonWithRecipe/1/${id_recipe}`, {})
  }

  // Methods Delete
  public deteleRecipe (id_recipe: number): Observable<void> {
    return this.http.delete<void>(`${this.urlAPI}/deleteRecipe/${id_recipe}`,{});
  }
}
