import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent {
  //Variables to use for capture information
  title_recipe: string = '';
  about_recipe: string = '';

  // Outputs
  @Output() emitInformation = new EventEmitter<{
    title_recipe: string;
    about_recipe: string;
  }>();

  @Output() emitInformationAditional = new EventEmitter<{
    time: string;
    difficulty: number;
    portions: number;
    category: number;
  }>();

  // Methods
  emit(): void {
    this.emitInformation.emit({
      title_recipe: this.title_recipe,
      about_recipe: this.about_recipe,
    });
  }

  emitProvideSon({
    time,
    difficulty,
    portions,
    category
  }: {
    time: string,
    difficulty: number,
    portions: number,
    category: number
  }): void {
    this.emitInformationAditional.emit({ time: time, difficulty: difficulty, portions: portions, category: category });
  }
  
}
