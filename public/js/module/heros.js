export class Heros{
    constuctor(nom,ptVie,ptAttaque){
        this.nom =nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque;
        this.action = action;
    }
    Attaque(){
        this.ptAttaque = this.ptAttaque * 1.4;
        this.ptVie = this.ptVie * 0.75;
        this.action = "attaque";
    }
    Defense(){
        this.ptAttaque = this.ptAttaque * 1.4;
        this.ptVie = this.ptVie * 0.75;
        this.action = "defense";
    }      
}