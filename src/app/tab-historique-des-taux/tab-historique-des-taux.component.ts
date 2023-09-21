import { Component, OnDestroy, OnInit } from '@angular/core';
import { HistoriqueDesTaux } from '../objects/HistoriqueDesTaux';
import { ConversionDeTauxService } from '../services/conversion-de-taux.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-tab-historique-des-taux',
  templateUrl: './tab-historique-des-taux.component.html',
  styleUrls: ['./tab-historique-des-taux.component.css']
})
/***Affichage des 5 derniers historique de taux saisi par l'utilisateur */
export class TabHistoriqueDesTauxComponent implements OnInit, OnDestroy{

  constructor(public conversionService :ConversionDeTauxService){}
  dataSource:HistoriqueDesTaux[] = []
  displayedColumns: string[] = ['deviseDorigine', 'deviseCalcule','tauxDeChange','tauxDeChangeSaisi', 'valeurInitial','valeurCalcule'];
  /** Subscription qui permet de s'abonner au changement des 5 dernieres conversion de taux demandées par l'utilisateur et d'ajuster l'affichage */
  private subscription : Subscription = new Subscription
  ngOnInit(){
    this.subscription = this.conversionService.historiqueDesTaux$.subscribe(data=>{
      this.dataSource = []
      data.forEach(historique=>{
        this.dataSource.push(historique)
      })
    })
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
