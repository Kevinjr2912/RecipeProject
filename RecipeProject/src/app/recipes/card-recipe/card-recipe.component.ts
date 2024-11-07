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
  @Input() id_recipe: number = 0;

  constructor(private serviceRecipe: RecipeService, private router: Router){}

  redirectToRecipeInformation(): void {
    this.router.navigate(['/seeInformationRecipe', this.id_recipe]);
  }

  redirectToUpdateRecipe(): void {
    this.router.navigate(['/updateRecipe', this.id_recipe]);
  }

  deleteRecipe(){
    this.serviceRecipe.deteleRecipe(this.id_recipe).subscribe(
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
