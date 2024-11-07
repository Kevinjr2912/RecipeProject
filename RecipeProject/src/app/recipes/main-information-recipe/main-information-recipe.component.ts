import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-information-recipe',
  templateUrl: './main-information-recipe.component.html',
  styleUrl: './main-information-recipe.component.css'
})
export class MainInformationRecipeComponent {

  // Inputs
  @Input() name_recipe: string = '';
  @Input() description: string = '';
  @Input() time: string = '';
  @Input() difficulty: string = '';
  @Input() portions: number = 0;
  @Input() category: string = '';
}
