export class Heros{
    constructor(nom, type,ptVie,ptAttaque, action){
        this.nom =nom;
        this.type = type;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque;
        this.action = action;
    }
    Action(){
        switch(true){
            case this.action == "attaque":
                this.attaque *= 1.4;
                this.ptVie *= 0.75;
            alert(`votre ${this.type} est en position ${this.action}. Il possède un quart de ses point de vie en moins (${Math.floor(this.vie)}),mais ses points d'attaque augmentent de deux cinquième (${Math.floor(this.attaque)})`);
            console.log(`votre ${this.type} est en position ${this.action}. Il possède un quart de ses point de vie en moins (${Math.floor(this.vie)}),mais ses points d'attaque augmentent de deux cinquième (${Math.floor(this.attaque)})`);
            break;
            
            case this.action == "défense":
                this.attaque *= 0.5;
                this.ptVie *= 2.5;
            alert(`votre ${this.type} est en position ${this.action}. Il possède seulement la moitié de ses points d'attaque (${Math.floor(this.attaque)}), mais ses points de vie augment de 2 fois et demi (${Math.floor(this.vie)}) `);
            console.log(`votre ${this.type} est en position ${this.action}. Il possède un quart de ses point de vie en moins (${Math.floor(this.vie)}),mais ses points d'attaque augmentent de deux cinquième (${Math.floor(this.attaque)})`);
            break;

            case this.action == "pacifique":
                this.attaque *= 0;
                this.ptVie *= 1;
            alert(`votre ${this.type} est en position ${this.action}. Il possède points (${Math.floor(this.attaque)})`);
            console.log(`votre ${this.type} est en position ${this.action}. Il possède points (${Math.floor(this.attaque)})`);
            break;

            default:
                alert(`Ceci ne fonctionne pas, veuillez introduire un mode`);
        }
    }
    FinTour(){
        switch (true){
            case this.action == "attaque":
                this.attaque /= 1.4;
                this.ptVie /= 0.75;
                this.action = "normal";
            
                alert(`votre ${this.type} est en position ${this.action}. Il possède (${Math.floor(this.vie)}) points de vie ,et ses points d'attaque sont de (${Math.floor(this.attaque)})`);
                console.log(`votre ${this.type} est en position ${this.action}. Il possède (${Math.floor(this.vie)}) points de vie ,et ses points d'attaque sont de (${Math.floor(this.attaque)})`);
                break;

            case this.action == "défense":
                this.attaque /= 0.5;
                this.vie /= 2.5;
                this.action = "normal";
                alert(`votre ${this.type} est en position ${this.action}. Il possède (${Math.floor(this.vie)}) points de vie ,et ses points d'attaque sont de (${Math.floor(this.attaque)})`);
                console.log(`votre ${this.type} est en position ${this.action}. Il possède (${Math.floor(this.vie)}) points de vie ,et ses points d'attaque sont de (${Math.floor(this.attaque)})`);
                break;
        }
    }
}