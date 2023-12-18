export interface Reclamation {
    id: number;
    client: Utilisateur; // Utilisateur client
    dateCreation: Date;
    etat: string;
    description: string;
    fichierExcel: string; // Nom du fichier Excel en PJ
}