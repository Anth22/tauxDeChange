import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})

/**Champ de saisie pour récupérer le taux de change ou le montant à convertir */
export class InputFieldComponent {
  @Input() deviseSaisie: string = ""
  _typeDeForme: string = "taux"
  @Input() disableValue: boolean = false
  @Input() deviseCalcule: number = 1
  @Output() valeurSaisie = new EventEmitter<number>();
  step: number = 1
  deviseEmise: number = -1 //Permet d'empêcher d'emettre les même valeurs à convertir

  @Input({ required: true }) set TypeDeForme(value: string) {
    this.step = (value === "taux") ? 0.1 : 1
    this._typeDeForme = value;
  }

  get TypeDeForme(): string {
    return this._typeDeForme;
  }
  conversionEURtoUSD(valeurSaisie:any){
    if (this.deviseEmise != valeurSaisie.target.value &&valeurSaisie.target.value!=0&&valeurSaisie.target.value!=null){
      this.deviseEmise = valeurSaisie.target.value
      //console.log("this.event : "+JSON.stringify(valeurSaisie.target.value))
      this.valeurSaisie.emit(valeurSaisie.target.value)
    }
  }
}
