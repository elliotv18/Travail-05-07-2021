import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Livre } from '../livre.model';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-creer-livre',
  templateUrl: './creer-livre.component.html',
  styleUrls: ['./creer-livre.component.scss']
})
export class CreerLivreComponent implements OnInit {

  
  fTitre = new FormControl('',[Validators.required]);
  fAuteur = new FormControl('',[Validators.required]);
  
  form = new FormGroup(
    {
      titre:this.fTitre,
      auteur:this.fAuteur,
    })
  
    constructor(private livreService:LivresService) { }
  
    ngOnInit(): void {
  }
  onSubmit(){
    const nouveauLivre = new Livre(
      this.form.value['titre'],
      this.form.value['auteur']
      
         )
    this.livreService.ajouterLivre(nouveauLivre);
  }

}
