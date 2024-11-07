import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCommentComponent } from './container-comment/container-comment.component';
import { ContainerListCommentComponent } from './container-list-comment/container-list-comment.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentService } from './Services/comment.service';
import { ReceiveCommentComponent } from './receive-comment/receive-comment.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContainerCommentComponent,
    ContainerListCommentComponent,
    ReceiveCommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ContainerListCommentComponent,
    ReceiveCommentComponent
  ],
  providers: [
    CommentService
  ]
})
export class CommentsModule { }
