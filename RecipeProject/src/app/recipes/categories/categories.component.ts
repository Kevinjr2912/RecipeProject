import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string): void {
    this.categorySelected.emit(category);
  }
}
