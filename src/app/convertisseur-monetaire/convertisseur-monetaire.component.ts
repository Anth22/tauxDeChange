import { Component } from '@angular/core';
import { ConversionDeTauxService } from '../services/conversion-de-taux.service';
import { HistoriqueDesTaux } from '../objects/HistoriqueDesTaux';

export enum TypeDeTaux {
  TF = "Taux fixe",
  TR = "Taux réel",
}

@Component({
  selector: 'app-convertisseur-monetaire',
  templateUrl: './convertisseur-monetaire.component.html',
  styleUrls: ['./convertisseur-monetaire.component.css']
})
export class ConvertisseurMonetaireComponent {
  tauxDeChange = 1.1   /**Taux réel */
  montantConverti: number = 0
  libelleChange : string = "EUR/USD"
  deviseConvertie : string = "USD"
  deviseDorigine : string = "EUR"
  changerDeTauxChecked : boolean = false
  public thePeriod: any;
  public dateDernierTauxDeChange:Date = new Date() 
  public historiqueDesTaux: HistoriqueDesTaux[]=[] // = new Array(5)
  public typeDeTauxAffiche = TypeDeTaux.TR  /**Taux fixe ou taux réel */
  public tauxFixeActive : boolean = false;

  constructor(public conversionService :ConversionDeTauxService){}

  ngOnInit(){
    this.setTauxDeChange()
    this.montantConverti = 0
  }

  /**Méthode pour mettre à jour la devise à convertir et le taux de change dans l'app */
  toggle(event: any){
    this.libelleChange = "EUR/USD"
    this.deviseConvertie = "USD"
    this.deviseDorigine = "EUR"
    this.tauxDeChange = 1.1;
    if (event=="EUR"){
      this.tauxDeChange = this.tauxDeChange * 0.9
      this.libelleChange = "USD/EUR"
      this.deviseConvertie = "EUR"
      this.deviseDorigine = "USD"
    }
    this.montantConverti = 0;
    this.conversionService.devise$.next(this.deviseConvertie)
    this.conversionService.updateTauxDeChangeAconvertir()
  }

  /**Retourne un nombre aléatoire entre -0.05 et +0.05 */
  getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  setTauxDeChange(){
    this.conversionService.tauxDeChange$.subscribe(value=>{
      this.tauxDeChange = value
    })
    this.thePeriod = setInterval(()=>{
      if (!this.tauxFixeActive){
        let number = this.getRandomNumber(-0.05,0.05)
        this.tauxDeChange = Math.round((this.tauxDeChange + number)*1000)/1000;
        this.dateDernierTauxDeChange = new Date()
      }
    }, 3000)
  }

  onEmitMontant(valeurSaisie:number){
    this.montantConverti = Math.round(this.tauxDeChange * valeurSaisie *100)/100
    let montantSaisi = new HistoriqueDesTaux(this.deviseDorigine, this.deviseConvertie, this.tauxDeChange, this.tauxDeChangeSaisi, valeurSaisie, this.montantConverti) 
    if (this.historiqueDesTaux.length>=5){
      this.historiqueDesTaux.splice(0,1)
    }
    this.historiqueDesTaux.push(montantSaisi)
    this.conversionService.historiqueDesTaux$.next(this.historiqueDesTaux)
  }

  /**Taux fixe */
  tauxDeChangeSaisi: number = 0
  onEmitTaux(valeurSaisie:number){
    console.log("this.tauxFixeActive : "+this.tauxFixeActive)
    let tauxDeChangeMaxAcceptableMax = this.tauxDeChange * 1.02
    let tauxDeChangeMaxAcceptableMin = this.tauxDeChange * 0.98
    /***Si on saisi un taux de change avec une variation de plus 2% par rapport au taux réel, le taux réel reste le même */
    if (tauxDeChangeMaxAcceptableMin <= valeurSaisie && valeurSaisie <= tauxDeChangeMaxAcceptableMax){
      this.tauxDeChangeSaisi = +valeurSaisie
      this.tauxDeChange = +valeurSaisie
      this.typeDeTauxAffiche = TypeDeTaux.TF
      this.tauxFixeActive = true
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.thePeriod);
  }
}
