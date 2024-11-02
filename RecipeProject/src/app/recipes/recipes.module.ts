import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeDetailsAditionalComponent } from './recipe-details-aditional/recipe-details-aditional.component';
import { ContentRecipeComponent } from './content-recipe/content-recipe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { CardRecipeComponent } from './card-recipe/card-recipe.component';
import { ListCardsRecipesComponent } from './list-cards-recipes/list-cards-recipes.component';
import { GeneralInformationRecipeComponent } from './general-information-recipe/general-information-recipe.component';

@NgModule({
  declarations: [
    FormRecipeComponent,
    RecipeDetailsComponent,
    RecipeDetailsAditionalComponent,
    ContentRecipeComponent,
    CategoriesComponent,
    CardRecipeComponent,
    ListCardsRecipesComponent,
    GeneralInformationRecipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormRecipeComponent,
    ListCardsRecipesComponent
  ]
})
export class RecipesModule { }
