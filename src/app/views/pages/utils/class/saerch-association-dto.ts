export class SaerchAssociationDTO {
    commune: any[]=[];
    type: any[]=[];
    dateDebut:Date;
    dateFin:Date;
    constructor(   type: any[],   commune: any[], dateDebut:Date, dateFin:Date,){
this.commune=commune;
this.type=type;
this.dateDebut=dateDebut;
this.dateFin=dateFin;
    }
}
