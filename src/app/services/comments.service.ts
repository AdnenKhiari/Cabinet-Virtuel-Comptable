export interface Commentaire {
  id: number
  auteur: string
  texte: string
  date: Date
}
// commentaire.service.ts

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
// import { Commentaire } from './interfaces/comment'; //interface comment

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:3000' // Replace API endpoint

  constructor(private http: HttpClient) {}

  addComment(fileId: number, commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(`${this.apiUrl}/files/${fileId}/comments`, commentaire)
  }

  updateComment(
    fileId: number,
    commentId: number,
    updatedComment: Commentaire
  ): Observable<Commentaire> {
    return this.http.put<Commentaire>(
      `${this.apiUrl}/files/${fileId}/comments/${commentId}`,
      updatedComment
    )
  }

  deleteComment(fileId: number, commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/files/${fileId}/comments/${commentId}`)
  }

  getCommentsForFile(fileId: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/files/${fileId}/comments`)
  }
}
