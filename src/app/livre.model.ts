export class Livre {
    titre:string;
    auteur:string;

    constructor(titre:string, auteur:string){
        this.titre = titre;
        this.auteur = auteur;
    }
    afficherDansConsole(){
        console.log(this.titre);
    }
}
