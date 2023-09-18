import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-convertisseur-monetaire',
  templateUrl: './convertisseur-monetaire.component.html',
  styleUrls: ['./convertisseur-monetaire.component.css']
})
export class ConvertisseurMonetaireComponent {
  tauxDeChange = 1.1 //définit le taux EUR/USD par défaut
  montantConverti: number = 0
  convertEURtoUSDchecked : boolean = true;
  libelleChange = "EUR/USD"
  deviseConvertie = "USD"
  nouveauTaux : number = 0
  changerDeTauxChecked : boolean = false
  ngOnInit(){
    this.setTauxDeChange()
    this.montantConverti = 0
  }

  toggle(event: any){
    console.log("= event.checked; : "+ JSON.stringify(event))
    this.libelleChange = "EUR/USD"
    this.deviseConvertie = "USD"
    this.tauxDeChange = 1.1;
    //this.convertEURtoUSDchecked = event.checked
    if (event=="EUR"){
      this.tauxDeChange = this.tauxDeChange * 0.9
      this.libelleChange = "USD/EUR"
      this.deviseConvertie = "EUR"
    }
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
    setInterval(()=>{
      let number = this.getRandomNumber(-0.05,0.05)
      this.tauxDeChange = Math.round(this.tauxDeChange + this.getRandomNumber(-0.05,0.05)*100)/100;
      console.log("this.tauxDeChange : "+number)
    }, 30000)
  }

  conversionEURtoUSD(event:any){
    //console.log("this.montantConverti : "+this.montantConverti)
    //console.log("this.event : "+JSON.stringify(event.target.value))
    this.montantConverti = event.target.value
    this.montantConverti *= this.tauxDeChange
  }
}
