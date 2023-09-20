import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**Service de conversion EURO/USD ou USD/EURO */
export class ConversionDeTauxService {
  /**
  * behaviorSubject de type nombre qui contient l'information sur le taux à conevrtir
  */
  devise$: BehaviorSubject<string> = new BehaviorSubject("USD");

  /**
  * behaviorSubject de type nombre qui contient l'information sur la valeur du taux de change
  */
  tauxDeChange$: BehaviorSubject<number> = new BehaviorSubject(1.1);
  constructor() { }

  get devise() {
    return this.devise$.value;
  }

  public get tauxDeChange() {
    return this.tauxDeChange$.value;
  }

  /*public changerDeviseAconvertir(){
    if (this.devise=="USD"){
      this.tauxDeChange$.next(1.1)
    }
    else{
      this.tauxDeChange$.next(0.9)
    }
  }*/

  public updateTauxDeChangeAconvertir(){
    if (this.devise=="USD"){
      /**On réaffecte le taux par défaut de 1.1 */
      this.tauxDeChange$.next(1.1)
    }
    else{
      this.tauxDeChange$.next(0.9)
    }
  }

}
