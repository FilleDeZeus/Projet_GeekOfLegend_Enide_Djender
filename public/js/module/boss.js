export class Boss {
    constructor(nom,ptVie,ptAttaque){
        this.nom = nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque;
    }
    attaque(hero) {
        hero.ptVie -= this.ptAttaque;
    }
    enigme(hero1, hero2, hero3) {

        let resultat = false;
        let i = 3;
        let choix = Math.ceil(Math.random() * 4);
        let reponse;


        while (i > 0 && resultat == false) {

            switch (choix) {
                case 1:
                    reponse= prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?");
                    if (reponse== "le silence") {
                        resultat = true
                    }
                    break;
                case 2:
                    reponse= prompt("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?");
                    if (reponse= "le courant") {
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