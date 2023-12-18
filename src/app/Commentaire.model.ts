export interface Commentaire {
    id: number;
    auteur: Utilisateur; // Utilisateur qui a fait le commentaire
    texte: string;
    date: Date;
}