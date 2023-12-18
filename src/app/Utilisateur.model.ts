export interface Utilisateur {
    id: number;
    nomUtilisateur: string;
    motDePasse: string;
    role: string; // "Client", "Manager", "Senior", "Comptable"
    email: string;
    telephone: string;
    adresse: string;
    creation:Date;
  }