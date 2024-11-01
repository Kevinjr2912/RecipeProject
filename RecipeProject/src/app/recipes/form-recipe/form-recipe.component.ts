import { Component } from '@angular/core';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrl: './form-recipe.component.css'
})
export class FormRecipeComponent {
  sendRecipe(title_recipe: {title_recipe: string, about_recipe: string}) : void {
    console.log(title_recipe)
  }
}
