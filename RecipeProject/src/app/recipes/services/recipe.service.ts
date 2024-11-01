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
    console.log("Este es el id" + recipe.id_person)
    return this.http.post<void>(`${this.urlAPI}/createRecipe/${recipe.id_person}`, recipe);
  }
}
