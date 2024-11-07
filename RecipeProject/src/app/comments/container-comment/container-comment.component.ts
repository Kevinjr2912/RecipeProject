import { Component, Input } from '@angular/core';
import { ICommentSerialization } from '../models/icomment-serialization';

@Component({
  selector: 'app-container-comment',
  templateUrl: './container-comment.component.html',
  styleUrl: './container-comment.component.css',
})
export class ContainerCommentComponent {
  @Input() comment: ICommentSerialization = {
    response: '',
    Person: {
      first_name_person: '',
      middle_name_person: '',
      first_surname_person: '',
      middle_surname_person: '',
    },
  };
}
