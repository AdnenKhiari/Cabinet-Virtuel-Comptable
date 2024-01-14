export interface CarouselInterface {
    _id: string,
    titre: string,
    commentaire: string,
    description: string,
    ficheUrl: string,
    rang:number,
    tarifs?:number[],
}