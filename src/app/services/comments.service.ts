import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:3000/comments'

  constructor(private http: HttpClient) {}

  addComment(fileId: number, commentData: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/files/${fileId}/comments`, commentData)
  }

  updateComment(fileId: number, commentId: number, commentData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/files/${fileId}/comments/${commentId}`, commentData)
  }

  deleteComment(fileId: number, commentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/files/${fileId}/comments/${commentId}`)
  }
}
