import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardsRecipesComponent } from './recipes/list-cards-recipes/list-cards-recipes.component';
import { GeneralInformationRecipeComponent } from './recipes/general-information-recipe/general-information-recipe.component';
import { FormRecipeComponent } from './recipes/form-recipe/form-recipe.component';
import { FormUpdateRecipeComponent } from './recipes/form-update-recipe/form-update-recipe.component';

const routes: Routes = [
  { path: '', component: ListCardsRecipesComponent },
  { path: 'seeInformationRecipe/:id_recipe', component: GeneralInformationRecipeComponent },
  { path: 'createRecipe', component: FormRecipeComponent },
  { path: 'updateRecipe/:id_recipe', component: FormUpdateRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
