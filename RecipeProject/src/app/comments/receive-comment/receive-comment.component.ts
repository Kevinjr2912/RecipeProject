import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-receive-comment',
  templateUrl: './receive-comment.component.html',
  styleUrl: './receive-comment.component.css'
})
export class ReceiveCommentComponent {

  response: string = '';
  flag: boolean = false;

  @Output() res = new EventEmitter<{
    res: string;
    flag: boolean
  }>


  emit(){
    this.res.emit({
      res: this.response,
      flag: this.flag
    });
  }
}
