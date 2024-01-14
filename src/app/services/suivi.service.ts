// tracking.service.ts
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  constructor() {}
  private trackedFiles: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  // Ajoute un fichier au suivi
  trackFile(fileId: string): void {
    const currentTrackedFiles = this.trackedFiles.value
    if (!currentTrackedFiles.includes(fileId)) {
      currentTrackedFiles.push(fileId)
      this.trackedFiles.next(currentTrackedFiles)
    }
  }

  // Retire un fichier du suivi
  untrackFile(fileId: string): void {
    const currentTrackedFiles = this.trackedFiles.value
    const updatedTrackedFiles = currentTrackedFiles.filter(id => id !== fileId)
    this.trackedFiles.next(updatedTrackedFiles)
  }

  // Obtient la liste des fichiers en cours de suivi
  getTrackedFiles(): Observable<string[]> {
    return this.trackedFiles.asObservable()
  }

  // Informe les utilisateurs des mises à jour de suivi
  notifyUpdate(fileId: string, newState: string): void {
    console.log(`Le fichier ${fileId} est maintenant dans l'état ${newState}`)
  }
}
