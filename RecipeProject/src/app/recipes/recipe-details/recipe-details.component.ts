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
  @Output() emit = new EventEmitter<{
    title_recipe: string;
    about_recipe: string;
  }>();

  // Methods
  emitter(): void {
    this.emit.emit({
      title_recipe: this.title_recipe,
      about_recipe: this.about_recipe,
    });
  }
}
