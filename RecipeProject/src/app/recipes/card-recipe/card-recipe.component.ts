import { Component, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrl: './card-recipe.component.css'
})
export class CardRecipeComponent {
  @Input() titleRecipe: string = '';
  @Input() idRecipe: number = 0;

  constructor(private serviceRecipe: RecipeService, private router: Router){}

  redirectToRecipeInformation(): void {
    this.router.navigate(['/seeRecipeToInformation', this.idRecipe]);
  }

  redirectToUpdateRecipe(): void {
    this.router.navigate(['/updateRecipe', this.idRecipe]);
  }

  deleteRecipe(){
    this.serviceRecipe.deteleRecipe(this.idRecipe).subscribe(
      (data) => {
        Swal.fire({
          title: 'Éxito!',
          text: 'La receta se ha actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
}
