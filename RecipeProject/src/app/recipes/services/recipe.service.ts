import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecipeSend } from '../models/irecipe-send';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private urlAPI = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient){}

  public createRecipe(recipe: IRecipeSend): Observable<void> {
    return this.http.post<void>(`${this.urlAPI}/createRecipe/${recipe.id_person}`, recipe);
  }

  public deteleRecipe (id_recipe: number): Observable<void> {
    return this.http.delete<void>(`${this.urlAPI}/deleteRecipe/${id_recipe}`,{});
  }
}
