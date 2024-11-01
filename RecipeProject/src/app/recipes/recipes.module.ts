import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeDetailsAditionalComponent } from './recipe-details-aditional/recipe-details-aditional.component';
import { ContentRecipeComponent } from './content-recipe/content-recipe.component';

@NgModule({
  declarations: [
    FormRecipeComponent,
    RecipeDetailsComponent,
    RecipeDetailsAditionalComponent,
    ContentRecipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormRecipeComponent
  ]
})
export class RecipesModule { }
