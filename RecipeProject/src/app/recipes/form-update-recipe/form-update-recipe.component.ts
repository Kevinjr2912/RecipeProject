import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { IRecipeReceiveeToUpdate } from '../models/irecipe-receivee-to-update';
import { IIngredienteUpdate } from '../models/iingrediente-update';
import { IRecipeSend } from '../models/irecipe-send';
import { IIngredientSerialization } from '../models/iingredient-serialization';
import Swal from 'sweetalert2';
import { ContentRecipeComponent } from '../content-recipe/content-recipe.component';

@Component({
  selector: 'app-form-update-recipe',
  templateUrl: './form-update-recipe.component.html',
  styleUrl: './form-update-recipe.component.css',
})
export class FormUpdateRecipeComponent implements OnInit {
  constructor(
    private serviceRecipe: RecipeService,
    private route: ActivatedRoute
  ) {}

  // Variables
  @ViewChild('ingredientComponent', { static: false })
  ingredientComponent!: ContentRecipeComponent;
  @ViewChild('preparationComponent', { static: false })
  preparationComponent!: ContentRecipeComponent;

  id_recipe: number = 0;
  array_preparation: string[] = [];
  array_ingredients: string[] = [];
  flag: boolean = false;

  recipeToUpdate: IRecipeReceiveeToUpdate = {
    name_recipe: '',
    description: '',
    preparation: '',
    time_duration: '',
    number_portion: 0,
    CategoryRecipe: {
      name_type_recipe: '',
    },
    TypeDifficulty: {
      name_type_difficulty: '',
    },
    Ingredients: [],
  };

  recipeSendToUpdate: IRecipeSend = {
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
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id_recipe');
    if (id) {
      this.id_recipe = +id;
      this.getInformationRecipe();
    }
  }

  // Consume the API
  getInformationRecipe(): void {
    this.serviceRecipe.getinformationRecipe(this.id_recipe).subscribe(
      (response) => {
        this.recipeToUpdate = response;
        this.recipeToUpdate.time_duration = this.convertToMinutes(
          response.time_duration
        );
        this.array_preparation = this.recipeToUpdate.preparation.split(',');
        this.array_ingredients = this.formatIngredients(
          this.recipeToUpdate.Ingredients
        );
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  updateRecipe(): void {
    this.handleIngredientData(this.ingredientComponent.sendIngredients());
    this.handlePreparationData(this.preparationComponent.sendPreparation());

    console.log(this.recipeSendToUpdate)

    this.serviceRecipe.updateInformationRecipe(this.id_recipe, this.recipeSendToUpdate).subscribe(
      (response) => {
        console.log('Receta actualizada:', response);
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
    )
  }

  // Common Methods
  receiveMainRecipeInformationToUpdate({
    name_recipe,
    about,
  }: {
    name_recipe: string;
    about: string;
  }): void {
    this.recipeSendToUpdate.name_recipe = name_recipe;
    this.recipeSendToUpdate.description = about;
  }

  receiveAditionalRecipeInformationToUpdate({
    time_update,
    difficulty_update,
    portions_update,
    category_update,
  }: {
    time_update: string;
    difficulty_update: number;
    portions_update: number;
    category_update: number;
  }): void {
    this.recipeSendToUpdate.time_duration = time_update;
    this.recipeSendToUpdate.id_difficulty = difficulty_update;
    this.recipeSendToUpdate.number_portion = portions_update;
    this.recipeSendToUpdate.id_category_recipe = category_update;
  }

  convertToMinutes(timeDuration: string): string {
    const [hours, minutes, seconds] = timeDuration.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + seconds / 60;

    return totalMinutes.toString();
  }

  formatIngredients(ingredients: IIngredienteUpdate[]): string[] {
    let ingredientsFormated: string[] = [];

    ingredients.map((ingredient) => {
      let formattedString: string = '';

      if (ingredient.RecipeIngredient.unit_measurement === 'Entero') {
        formattedString = `${ingredient.RecipeIngredient.count_ingredient} ${ingredient.name_ingredient}`;
      } else {
        formattedString = `${ingredient.RecipeIngredient.count_ingredient} ${ingredient.RecipeIngredient.unit_measurement} de ${ingredient.name_ingredient}`;
      }

      ingredientsFormated.push(formattedString);
    });

    return ingredientsFormated;
  }

  handleIngredientData(ingredients: string[]): void {
    let ingredientsFormatted: IIngredientSerialization[] = [];

    ingredients.forEach((ingredient) => {
      let ingredientToAdd: IIngredientSerialization = {
        name_ingredient: '',
        count_ingredient: 0,
        unit_measurement: '',
      };

      if (ingredient.includes('de')) {
        const parts = ingredient.split('de');
        const quantityAndUnit = parts[0].trim().split(' ');

        ingredientToAdd.name_ingredient = parts.slice(1).join('de').trim();
        ingredientToAdd.count_ingredient = Number(quantityAndUnit[0]);
        ingredientToAdd.unit_measurement = quantityAndUnit[1];
      } else {
        const quantityAndNameIngredient = ingredient.trim().split(' ');
        ingredientToAdd.name_ingredient = quantityAndNameIngredient
          .slice(1)
          .join(' ');
        ingredientToAdd.count_ingredient = Number(quantityAndNameIngredient[0]);
        ingredientToAdd.unit_measurement = 'Entero';
      }

      ingredientsFormatted.push(ingredientToAdd);
    });

    this.recipeSendToUpdate.ingredients = ingredientsFormatted;
  }

  handlePreparationData(preparationSteps: string[]): void {
    this.recipeSendToUpdate.preparation =
      this.recipeSendToUpdate.preparation.length !== 0
        ? this.recipeSendToUpdate.preparation + ',' + preparationSteps.join(',')
        : preparationSteps.join(',');
  }

}
