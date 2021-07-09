import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherLesLivresComponent } from './afficher-les-livres/afficher-les-livres.component';
import { AfficherLivreComponent } from './afficher-livre/afficher-livre.component';
import { AppComponent } from './app.component';
import { CreerLivreComponent } from './creer-livre/creer-livre.component';
import { LivresService } from './livres.service';

const routes: Routes = [
  {path: 'livres-liste', component: AfficherLesLivresComponent},
  {path: 'creer-livre', component: CreerLivreComponent},
  {path: 'afficher-un-livre', component: AfficherLivreComponent},
  {path: 'accueil', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
