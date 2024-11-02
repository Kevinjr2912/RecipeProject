import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { IRecipeAndUserSerialization } from '../models/irecipe-and-user-serialization';
import { IIngredientsReceiveSerialization } from '../models/iingredients-receive-serialization';

@Component({
  selector: 'app-general-information-recipe',
  templateUrl: './general-information-recipe.component.html',
  styleUrl: './general-information-recipe.component.css',
})
export class GeneralInformationRecipeComponent implements OnInit {
  constructor(
    private serviceRecipe: RecipeService,
    private route: ActivatedRoute
  ) {}

  // Variables
  id_recipe: number = 0;
  recipe: IRecipeAndUserSerialization = {
    person: {
      first_name_person: '',
      middle_name_person: '',
      first_surname_person: '',
      middle_surname_person: '',
      nationality: {
        name_nationality: '',
      },
      specialty: {
        name_type_specialty: '',
      },
    },
    recipe: {
      name_recipe: '',
      description: '',
      preparation: '',
      time_duration: '',
      number_portion: 0,
      type_difficulty: {
        name_type_difficulty: '',
      },
      category_recipe: {
        name_type_recipe: '',
      },
      ingredients: [],
    },
  };

  // Methods
  ngOnInit(): void {
    const id_recipe = this.route.snapshot.paramMap.get('id_recipe');
    if (id_recipe) {
      this.id_recipe = +id_recipe;
      this.getDetails(this.id_recipe);
    }
  }

  getDetails(id_recipe: number): void {
    this.serviceRecipe.getDatailsRecipeAndPerson(id_recipe).subscribe(
      (data) => {
        this.associateValues(data);
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  associateValues(data: any): void {
    // We associate certain data values with person attributes
    this.recipe.person.first_name_person = data.first_name_person,
    this.recipe.person.middle_name_person = data.middle_name_person,
    this.recipe.person.first_surname_person = data.first_surname_person,
    this.recipe.person.middle_surname_person = data.middle_surname_person,
    this.recipe.person.nationality = data.Nationality.name_nationality,
    this.recipe.person.specialty = data.Specialty.name_type_specialty

    // We associate certain data values with recipe attributes
    this.recipe.recipe.name_recipe = data.Recipes[0].name_recipe,
    this.recipe.recipe.description = data.Recipes[0].description,
    this.recipe.recipe.preparation = data.Recipes[0].preparation,
    this.recipe.recipe.time_duration = this.convertToMinutes(data.Recipes[0].time_duration),
    this.recipe.recipe.number_portion = data.Recipes[0].number_portion,
    this.recipe.recipe.type_difficulty = data.Recipes[0].TypeDifficulty,
    this.recipe.recipe.category_recipe = data.Recipes[0].CategoryRecipe
    this.recipe.recipe.ingredients = data.Recipes[0].Ingredients as IIngredientsReceiveSerialization[];
  }

  convertToMinutes(timeDuration: string): string {
    const [hours, minutes, seconds] = timeDuration.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + seconds / 60;

    return totalMinutes.toString();
  }
}
