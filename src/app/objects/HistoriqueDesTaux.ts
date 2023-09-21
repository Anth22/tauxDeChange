


export class HistoriqueDesTaux {
    deviseDorigine: string
    deviseCalcule: string
    tauxDeChange: number 
    tauxDeChangeSaisi : number
    valeurCalcule: number
    valeurInitial: number

    constructor(deviseDorigine: string, deviseCalcule: string, tauxDeChange: number, tauxDeChangeSaisi: number,valeurInitial:number, valeurCalcule: number)
    { 
        this.deviseDorigine  = deviseDorigine;
        this.deviseCalcule = deviseCalcule;
        this.tauxDeChange = tauxDeChange;
        this.tauxDeChangeSaisi = tauxDeChangeSaisi;
        this.valeurCalcule = valeurCalcule;
        this.valeurInitial = valeurInitial;
    }
}