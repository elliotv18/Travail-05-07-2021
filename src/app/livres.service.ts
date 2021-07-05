import { Injectable } from '@angular/core';
import { Livre } from './livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  private _listeLivres: Livre[] = []

  ajouterLivre(pLivre: Livre) {
    this._listeLivres.push(pLivre);
  }

  listerLivre(): Livre[]{
    return this._listeLivres
  }

  rechargerListe(pListeLivre:Livre[]){
    this._listeLivres = pListeLivre;
  }



  constructor(private livreService: LivresService) {
    livreService.ajouterLivre(new Livre('Germinal', 'Emile Zola'))
    livreService.ajouterLivre(new Livre('Tunnels', 'Roderick Gordon'))
   }
}
