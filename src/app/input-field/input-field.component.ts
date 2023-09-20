import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})

/**Champ de saisie pour récupérer le taux de change ou le montant à convertir */
export class InputFieldComponent {
  @Input() libelleChange : string = ""
  @Input() type: string = "taux"
  @Output() valeurSaisie = new EventEmitter<number>();

  conversionEURtoUSD(valeurSaisie:any){
    //console.log("this.event : "+JSON.stringify(valeurSaisie.target.value))
    this.valeurSaisie.emit(valeurSaisie.target.value)
  }
}
