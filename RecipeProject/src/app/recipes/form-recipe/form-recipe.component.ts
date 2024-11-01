import { Component } from '@angular/core';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrl: './form-recipe.component.css',
})
export class FormRecipeComponent {
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
    difficulty: string;
    portions: string;
    category: string;
  }): void {}
}
