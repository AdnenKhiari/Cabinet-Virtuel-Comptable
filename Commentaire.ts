export interface Commentaire {
  id: string;
  author: string; // Auteur du commentaire
  text: string; // Texte du commentaire
  creationDate: Date; // Date de création du commentaire
  claimId: string; // Identifiant de la réclamation associée
  status: "Pending" | "Approved" | "Rejected"; // Statut du commentaire (en attente, approuvé, rejeté, etc.)
  attachments?: string[]; // Liste des fichiers joints au commentaire
}
