import { Component, OnInit } from '@angular/core';
import { ITitleRecipeReceived } from '../models/ititle-recipe-received';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-list-cards-recipes',
  templateUrl: './list-cards-recipes.component.html',
  styleUrl: './list-cards-recipes.component.css',
})
export class ListCardsRecipesComponent implements OnInit {
  constructor(private serviceRecipe: RecipeService) {}

  // Variables
  recipes: ITitleRecipeReceived[] = [];
  id_person: number = 1;

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.serviceRecipe.getRecipesPublished(this.id_person).subscribe(
      (data) => {
        this.recipes = data;
        console.log(this.recipes)
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
}
