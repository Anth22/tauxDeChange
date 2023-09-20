import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ConversionDeTauxService } from '../services/conversion-de-taux.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-convertisseur-monetaire',
  templateUrl: './convertisseur-monetaire.component.html',
  styleUrls: ['./convertisseur-monetaire.component.css']
})
export class ConvertisseurMonetaireComponent {
  tauxDeChange = 1.1//Observable<number>//1.1 //définit le taux EUR/USD par défaut
  montantConverti: number = 0
  convertEURtoUSDchecked : boolean = true;
  libelleChange : string = "EUR/USD"
  deviseConvertie : string = "USD"
  nouveauTaux : number = 0
  changerDeTauxChecked : boolean = false
  public thePeriod: any;
  public dateDernierTauxDeChange:Date = new Date() 

  constructor(public conversionService :ConversionDeTauxService){}

  ngOnInit(){
    this.setTauxDeChange()
    this.montantConverti = 0
  }

  /**Méthode pour mettre à jour la devise à convertir et le taux de change dans l'app */
  toggle(event: any){
    this.libelleChange = "EUR/USD"
    this.deviseConvertie = "USD"
    this.tauxDeChange = 1.1;
    //this.convertEURtoUSDchecked = event.checked
    if (event=="EUR"){
      this.tauxDeChange = this.tauxDeChange * 0.9
      this.libelleChange = "USD/EUR"
      this.deviseConvertie = "EUR"
    }
    console.log("this.deviseConvertie 0 : "+ JSON.stringify(this.deviseConvertie))
    console.log("this.tauxDeChange 0 : "+ JSON.stringify(this.tauxDeChange))
    this.conversionService.devise$.next(this.deviseConvertie)
    this.conversionService.updateTauxDeChangeAconvertir()
  }

  miseAjourDuTauxJournalie(){
    // this.nouveauTaux ??
  }

  /**Retourne un nombre aléatoire entre -0.05 et +0.05 */
  getRandomNumber(min: number, max: number) {
    //console.log("test : "+Math.random()/10)
    return Math.random() * (max - min) + min;
  }

  setTauxDeChange(){
    /*this.conversionService.devise$.subscribe(value=>{
      this.deviseConvertie = value
    })*/

    this.conversionService.tauxDeChange$.subscribe(value=>{
      this.tauxDeChange = value
    })

    this.thePeriod = setInterval(()=>{
      let number = this.getRandomNumber(-0.05,0.05)
      this.tauxDeChange = Math.round((this.tauxDeChange + number)*1000)/1000;
      this.dateDernierTauxDeChange = new Date()
    }, 5000)
  }

  onEmitMontant(valeurSaisie:number){
    this.montantConverti = Math.round(this.tauxDeChange * valeurSaisie *100)/100
  }

  onEmitTaux(valeurSaisie:number){
    this.tauxDeChange = valeurSaisie
  }

  ngOnDestroy(): void {
    clearInterval(this.thePeriod);
  }
}
