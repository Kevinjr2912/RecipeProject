import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-content-recipe',
  templateUrl: './content-recipe.component.html',
  styleUrl: './content-recipe.component.css'
})
export class ContentRecipeComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef){}

  // Variables
  content: string = '';

  // Inputs
  @Input() name_process: string = '';

  // Outputs
  @Output() content_process = new EventEmitter<{name_process: string, content: string}>

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

    // We save the value of each input
    this.renderer.listen(input, 'blur', (event: any) => {
      this.content = event.target.value;

      if(!this.content){
        alert('Ingresa valores, no puede quedar vacío')
      } else {
        this.emitContent(this.content);
        this.renderer.setAttribute(input, 'disabled', 'true');
        this.content = '';
      }

    });
  }

  emitContent(content: string): void {
    this.content_process.emit({name_process: this.name_process, content});
  }


}
