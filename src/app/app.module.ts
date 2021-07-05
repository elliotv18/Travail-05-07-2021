import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherLesLivresComponent } from './afficher-les-livres/afficher-les-livres.component';
import { AfficherLivreComponent } from './afficher-livre/afficher-livre.component';
import { CreerLivreComponent } from './creer-livre/creer-livre.component';
import { LivresService } from './livres.service';


@NgModule({
  declarations: [
    AppComponent,
    AfficherLesLivresComponent,
    AfficherLivreComponent,
    CreerLivreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LivresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
