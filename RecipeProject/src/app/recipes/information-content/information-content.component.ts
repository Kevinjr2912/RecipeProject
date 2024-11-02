import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IIngredientsReceiveSerialization } from '../models/iingredients-receive-serialization';

@Component({
  selector: 'app-information-content',
  templateUrl: './information-content.component.html',
  styleUrls: ['./information-content.component.css'],
})
export class InformationContentComponent implements OnChanges {
  @Input() flag: boolean = false;
  @Input() ingredients: IIngredientsReceiveSerialization[] = [];
  @Input() preparation: string = '';
  ingredientsFormat: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ingredients'] && this.ingredients.length > 0) {
      this.ingredientsFormat = [];
      this.ingredients.forEach((ingredient) => {
        if (ingredient.RecipeIngredient.unit_measurement !== 'Entero') {
          const formatted = `${ingredient.RecipeIngredient.count_ingredient} ${ingredient.RecipeIngredient.unit_measurement} de ${ingredient.name_ingredient}`;
          this.ingredientsFormat.push(formatted);
        }
      });
    }
  }
}
