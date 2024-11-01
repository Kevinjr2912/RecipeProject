import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-details-aditional',
  templateUrl: './recipe-details-aditional.component.html',
  styleUrl: './recipe-details-aditional.component.css',
})
export class RecipeDetailsAditionalComponent {
  // Variables
  time: string = '';
  difficulty: string = '';
  portions: string = '';
  category: string = '';

  // Outputs
  @Output() emitInformationAditional = new EventEmitter<{
    time: string;
    difficulty: number;
    portions: number;
    category: number;
  }>();

  // Methods
  emit(): void {
    this.emitInformationAditional.emit({
      time: this.formatTimeDuration(this.time),
      difficulty: this.convertDifficultyToNumber(this.difficulty),
      portions: Number(this.portions),
      category: this.convertCategoryToNumber(this.category),
    });
  }

  formatTimeDuration(duration: string): string {
    const totalMinutes = parseInt(duration, 10);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${this.padZero(hours)}:${this.padZero(minutes)}:00`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  convertDifficultyToNumber(difficulty: string): number {
    switch (difficulty) {
      case 'Fácil':
        return 1;
      case 'Intermedio':
        return 2;
      case 'Difícil':
        return 3;
      default:
        return 0;
    }
  }

  convertCategoryToNumber(category: string): number {
    switch (category) {
      case 'Postres':
        return 1;
      case 'Ensaladas':
        return 2;
      case 'Desayunos':
        return 3;
      case 'Comidas':
        return 4;
      case 'Bebidas':
        return 5;
      default:
        return 0;
    }
  }
}
