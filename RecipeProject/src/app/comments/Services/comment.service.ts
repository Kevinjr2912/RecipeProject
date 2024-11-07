import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommentSerialization } from '../models/icomment-serialization';
import { ICommentSendSerialization } from '../models/icomment-send-serialization';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  private urlAPI = 'http://54.173.47.98/comments';

  //Methods create
  public createComment(comment: ICommentSendSerialization): Observable<void> {
    return this.http.post<void>(
      `${this.urlAPI}/createComment/${comment.id_recipe}/${comment.id_person}`,
      { response: comment.response }
    );
  }
  

  // Methods read
  public getAllCommentsRecipe(id_recipe: number): Observable<ICommentSerialization[]> {
    return this.http.post<ICommentSerialization[]>(
      `${this.urlAPI}/getAllComments/${id_recipe}`,
      {}
    );
  }
}
