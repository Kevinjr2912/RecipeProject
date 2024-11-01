import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-content-recipe',
  templateUrl: './content-recipe.component.html',
  styleUrl: './content-recipe.component.css'
})
export class ContentRecipeComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef){}

  // Inputs
  @Input() name_process: string = '';

  // Methods
  addInput() : void {
    // Variables that we associate with DOM elements
    const container = this.elementRef.nativeElement.querySelector('#container-inputs');
    const divContainer = this.renderer.createElement('div');
    const input = this.renderer.createElement('input');

    // We define the type of input to render
    this.renderer.setAttribute(input, 'type', 'text');
    this.renderer.setAttribute(input, 'id', 'input-content');

    // We create those elements 
    this.renderer.appendChild(divContainer, input);
    this.renderer.appendChild(container, divContainer);
  }


}
