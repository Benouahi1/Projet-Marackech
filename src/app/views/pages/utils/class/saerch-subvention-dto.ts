export class SaerchSubventionDTO {
    statutProjet: any[]=[];
    dateDebut:Date;
    dateFin:Date;
    constructor(   statutProjet: any[], dateDebut:Date, dateFin:Date,){
this.statutProjet=statutProjet;
this.dateDebut=dateDebut;
this.dateFin=dateFin;
    }
}
