import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre.model';
import { Input } from '@angular/core';
@Component({
  selector: 'app-afficher-livre',
  templateUrl: './afficher-livre.component.html',
  styleUrls: ['./afficher-livre.component.scss']
})
export class AfficherLivreComponent implements OnInit {
  @Input() pLivre?:Livre;
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
