export interface MembreCabinet {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: string;
}

export interface TravailMembreCabinet {
  id: string; // Identifiant du travail chronométré
  membreCabinet: MembreCabinet; // Membre du cabinet associé au travail
  tache: string; // Description de la tâche effectuée
  tempsPasse: number; // Temps passé sur la tâche en minutes
  dateDebut: Date; // Date de début du travail
  dateFin: Date; // Date de fin du travail
  clientCode?: string; // Code client lié à la tâche (si applicable)
}
