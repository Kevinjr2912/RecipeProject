import { Component } from '@angular/core';
import { IRecipeSend } from '../models/irecipe-send';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrl: './form-recipe.component.css',
})
export class FormRecipeComponent {

  // Variables

  // We initialize the values ​​of the object
  recipeToSend: IRecipeSend = {
    name_recipe: '',
    description: '',
    time_duration: '',
    id_difficulty: 0,
    number_portion: 0,
    id_category_recipe: 0,
    ingredients: [],
    preparation: ''
  }



  // Methods
  sendRecipe({
    title_recipe,
    about_recipe,
  }: {
    title_recipe: string;
    about_recipe: string;
  }): void {}

  assignValueAttribute({
    name_process,
    content,
  }: {
    name_process: string;
    content: string;
  }): void {
    if (name_process == 'Ingredientes') {
    } else {
    }
  }

  associateValue({
    time,
    difficulty,
    portions,
    category,
  }: {
    time: string;
    difficulty: number;
    portions: number;
    category: number;
  }): void {}
}
