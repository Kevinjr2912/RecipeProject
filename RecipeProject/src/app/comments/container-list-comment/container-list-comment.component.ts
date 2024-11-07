import { Component, Input } from '@angular/core';
import { CommentService } from '../Services/comment.service';
import { ICommentSerialization } from '../models/icomment-serialization';
import { ICommentSendSerialization } from '../models/icomment-send-serialization';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-container-list-comment',
  templateUrl: './container-list-comment.component.html',
  styleUrl: './container-list-comment.component.css'
})
export class ContainerListCommentComponent {
  constructor(private serviceComment: CommentService){}

  // Variables
  @Input() comments: ICommentSerialization[] = [];
  @Input() id_recipe: number = 0;
  @Input() id_person: number = 0;

  flag: boolean = false;

  commentToSend: ICommentSendSerialization = {
    id_recipe: 0,
    id_person: 0,
    response: ''
  }

  // Methods
  setFlag(): void {
    this.flag = true;
  }

  receiveResponse(obj: {res: string, flag: boolean}): void {
    this.flag = obj.flag;
    this.commentToSend.response = obj.res;

    this.createComment();
  }

  createComment(): void {
    this.commentToSend.id_person = this.id_person;
    this.commentToSend.id_recipe = this.id_recipe;

    console.log(this.commentToSend);
    this.serviceComment.createComment(this.commentToSend).subscribe(
      (response)=> {
        Swal.fire({
          title: 'Éxito!',
          text: 'Comentario creado',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      },
      (error) => {
        console.log(error)
      }
    )
  }

  
}
