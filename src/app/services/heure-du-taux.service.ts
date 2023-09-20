import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeureDuTauxService {

/**
* behaviorSubject de type nombre qui contient l'information sur l'heure du système
*/
heureDuTaux$: BehaviorSubject<Date> = new BehaviorSubject(new Date());

constructor() { }

/**
* fonction qui retourne la valeur de l'heure du système mémorisé dans la variable
*/
get heureDuTaux() {
  return this.heureDuTaux$.value;
}

}
