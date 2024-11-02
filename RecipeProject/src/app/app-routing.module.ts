import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardsRecipesComponent } from './recipes/list-cards-recipes/list-cards-recipes.component';
import { GeneralInformationRecipeComponent } from './recipes/general-information-recipe/general-information-recipe.component';

const routes: Routes = [
  { path: '', component: ListCardsRecipesComponent },
  { path: 'seeInformationRecipe/:id_recipe', component: GeneralInformationRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
