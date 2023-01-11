export class Personnages{
    constructor(nom,ptVie,ptAttaque){
        this.nom =nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque;
    }
}

//----------BOSS--------
export class Boss extends Personnages {
    constructor(nom, ptVie, ptAttaque){
        super(nom,ptVie,ptAttaque);
    }
    Enigme(hero1, hero2, hero3) {

        let resultat = false;
        let i = 3;
        let choix = Math.ceil(Math.random() * 4);
        let reponse;


        while (i > 0 && resultat == false) {

            switch (choix) {
                case 1:
                    reponse= prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ? (si faute d'orthographe réponse fausse)");
                    if (reponse== "le silence") {
                        resultat = true
                    } else if (reponse== "silence"){
                        resultat = true
                    }
                    break;
                case 2:
                    reponse= prompt("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ? (si faute d'orthographe réponse fausse)" );
                    if (reponse= "le courant") {
                        resultat = true
                    } else if (reponse== "courant"){
                        resultat = true
                    }
                    break;
                case 3:
                    reponse= prompt("Quel est l'indice du premier 'i' de cette question ?");
                    if (reponse== 11) {
                        resultat = true
                    }
                    break;
                case 4:
                    reponse= prompt("Que fait retourne Math.floor(1.3 * 10) ?");
                    if (reponse== 13) {
                        resultat = true
                    }
                    break;
                default:
                    break;
            }
            i--
        }
        if (resultat == false) {
            hero1.ptVie = 0;
            hero2.ptVie = 0;
            hero3.ptVie = 0;
        } else {
            this.ptVie = 0;
        }
    }
}
//----------HEROS--------
export class Heros extends Personnages {
    constructor(nom, ptvie, ptattaque){
        super(nom,ptvie,ptattaque);
    }
    defense(condition){
        if (condition == "start") {
            this.ptattaque *= 0.5;
            this.ptvie *= 2.5;
        } else if (condition == "end") {
            this.ptattaque /= 0.5;
            this.ptvie /= 2.5;
        }
    }
    attaque(condition){
        if (condition == "start") {
            this.ptattaque *= 1.4;
            this.ptvie *= 0.75;
        } else if (condition == "end") {
            this.ptattaque /= 1.4;
            this.ptvie /= 0.75;
        }
    }
    pacifique(condition){
        if (condition == "start") {
            this.ptattaque *= 0;
            this.ptvie *= 1;
        } else if (condition == "end") {
            this.ptattaque /= 0;
            this.ptvie /= 1;
        }
    }
}