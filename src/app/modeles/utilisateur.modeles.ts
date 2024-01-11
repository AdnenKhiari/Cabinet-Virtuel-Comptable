export class Utilisateur {
    constructor(
      public id: number,
      public nomUtilisateur: string,
      public motDePasse: string,
      public role: string,
      public email: string,
      public telephone: string,
      public adresse: string,
      public creation: Date
    ) {}
  }
  