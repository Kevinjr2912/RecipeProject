import { Component } from '@angular/core';
import { IRecipeSend } from '../models/irecipe-send';
import { IIngredientSerialization } from '../models/iingredient-serialization';
import { RecipeService } from '../services/recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrl: './form-recipe.component.css',
})
export class FormRecipeComponent {
  constructor(private serviceRecipe: RecipeService) {}

  // We initialize the values ​​of the object
  recipeToSend: IRecipeSend = {
    id_person: 1,
    name_recipe: '',
    description: '',
    time_duration: '',
    id_difficulty: 0,
    number_portion: 0,
    id_category_recipe: 0,
    ingredients: [],
    preparation: '',
  };

  // Methods
  assignMainValues({
    title_recipe,
    about_recipe,
  }: {
    title_recipe: string;
    about_recipe: string;
  }): void {
    this.recipeToSend.name_recipe = title_recipe;
    this.recipeToSend.description = about_recipe;
  }

  assignValuesForTheProcess({
    name_process,
    content,
  }: {
    name_process: string;
    content: string;
  }): void {
    if (name_process === 'Ingredientes') {
      this.handleIngredientData(content);
    } else {
      this.handlePreparationData(content);
    }
  }

  associateValueAditionals({
    time,
    difficulty,
    portions,
    category,
  }: {
    time: string;
    difficulty: number;
    portions: number;
    category: number;
  }): void {
    this.recipeToSend.time_duration = time;
    this.recipeToSend.id_difficulty = difficulty;
    this.recipeToSend.number_portion = portions;
    this.recipeToSend.id_category_recipe = category;
  }

  handleIngredientData(ingredient: string): void {
    let ingredientToAdd: IIngredientSerialization = {
      name_ingredient: '',
      count_ingredient: 0,
      unit_measurement: '',
    };

    if (ingredient.includes('de')) {
      const parts = ingredient.split('de');
      const quantityAndUnit = parts[0].trim().split(' ');

      ingredientToAdd.name_ingredient = parts[1].trim();
      ingredientToAdd.count_ingredient = Number(quantityAndUnit[0]);
      ingredientToAdd.unit_measurement = quantityAndUnit[1];
      this.recipeToSend.ingredients.push(ingredientToAdd);
    } else {
      const quantityAndNameIngredient = ingredient.trim().split(' ');
      ingredientToAdd.name_ingredient = quantityAndNameIngredient[1];
      ingredientToAdd.count_ingredient = Number(quantityAndNameIngredient[0]);
      ingredientToAdd.unit_measurement = 'Entero';
      this.recipeToSend.ingredients.push(ingredientToAdd);
    }
  }

  handlePreparationData(preparation: string): void {
    if (this.recipeToSend.preparation.length != 0) {
      this.recipeToSend.preparation += ',' + preparation;
    } else {
      this.recipeToSend.preparation += preparation;
    }
  }

  sendRecipe(): void {
    this.serviceRecipe.createRecipe(this.recipeToSend).subscribe(
      (response) => {
        console.log('Receta enviada exitosamente:', response);
        Swal.fire({
          title: 'Éxito!',
          text: 'La receta se ha creado',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      },
      (error) => {
        console.error('Error al enviar la receta:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrió un problema al crear la receta.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    );
  }
}
