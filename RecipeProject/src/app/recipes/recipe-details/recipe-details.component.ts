import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent {
  //Variables to use for capture information
  title_recipe: string = '';
  about_recipe: string = '';

  // Inputs
  @Input() name_recipe: string = '';
  @Input() about: string = '';
  @Input() time: string = '';
  @Input() difficulty: string = '';
  @Input() portion: number = 0;
  @Input() category: string = '';
  @Input() flag: boolean = false;

  // Outputs

  // ----------------- Create ------------------
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

  // -------------------- Update ---------------------
  @Output() emitInformationToUpdate = new EventEmitter<{
    name_recipe: string;
    about: string;
  }>();

  @Output() emitInformationAditionalToUpdate = new EventEmitter<{
    time_update: string;
    difficulty_update: number;
    portions_update: number;
    category_update: number;
  }>

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
    category,
  }: {
    time: string;
    difficulty: number;
    portions: number;
    category: number;
  }): void {
    this.emitInformationAditional.emit({
      time: time,
      difficulty: difficulty,
      portions: portions,
      category: category,
    });
  }

  emitUpdateInformationMain(): void {
    this.emitInformationToUpdate.emit({
      name_recipe: this.name_recipe,
      about: this.about,
    });
  }

  emitProvideSonToUpdate({
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
    this.emitInformationAditionalToUpdate.emit({
      time_update: time_update,
      difficulty_update: difficulty_update,
      portions_update: portions_update,
      category_update: category_update
    })
  }
}
