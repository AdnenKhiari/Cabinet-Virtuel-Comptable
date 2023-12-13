export interface Historique {
    id: number;
    date: Date;
    action: string;
    description: string;
    user: string;
}

export interface Audit extends Historique {
    earned: number;
}