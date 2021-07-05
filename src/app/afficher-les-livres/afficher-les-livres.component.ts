import { Component, OnInit } from '@angular/core';
import { LivresService } from '../livres.service';
import { Livre } from '../livre.model';
import { AfficherLivreComponent } from '../afficher-livre/afficher-livre.component';
@Component({
  selector: 'app-afficher-les-livres',
  templateUrl: './afficher-les-livres.component.html',
  styleUrls: ['./afficher-les-livres.component.scss']
})
export class AfficherLesLivresComponent implements OnInit {
  listeLivres:Livre[];
  
  
  constructor(private livreService: LivresService) {
    
    this.listeLivres = livreService.listerLivre()
    
   }

  ngOnInit(): void {
    
  }

}
