import { Component, OnInit } from '@angular/core';
import { ITitleRecipeReceived } from '../models/ititle-recipe-received';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cards-recipes',
  templateUrl: './list-cards-recipes.component.html',
  styleUrl: './list-cards-recipes.component.css',
})
export class ListCardsRecipesComponent implements OnInit {
  constructor(private serviceRecipe: RecipeService, private router: Router) {}

  // Variables
  recipes: ITitleRecipeReceived[] = [];
  filteredRecipes: ITitleRecipeReceived[] = [];
  id_person: number = 1;
  flag: boolean = false;

  // Methods
  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.serviceRecipe.getRecipesPublished(this.id_person).subscribe(
      (data) => {
        this.recipes = data;
        this.filteredRecipes = data;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  onCategorySelected(category: string): void {
    this.filteredRecipes = this.recipes.filter(recipe => recipe.CategoryRecipe.name_type_recipe === category);
  }

  redirectToCreateARecipe(): void {
    this.router.navigate(['createRecipe']);
  }
}
