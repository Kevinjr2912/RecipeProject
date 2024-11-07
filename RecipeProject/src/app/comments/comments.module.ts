import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCommentComponent } from './container-comment/container-comment.component';
import { ContainerListCommentComponent } from './container-list-comment/container-list-comment.component';



@NgModule({
  declarations: [
    ContainerCommentComponent,
    ContainerListCommentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
