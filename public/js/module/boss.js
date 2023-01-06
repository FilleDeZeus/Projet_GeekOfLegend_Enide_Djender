// export class Boss{
//     constuctor(nom,ptVie,ptAttaque){
//         this.nom =nom;
//         this.ptVie = ptVie;
//         this.ptAttaque = ptAttaque;
//     }
// }

let totalptVie = 3000;
let totalptAttaque = 400;

export class Boss {
    constuctor(nom,ptVie,ptAttaque){
        this.nom =nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque;
    }
    attaque(hero) {
        hero.ptVie -= this.ptAttaque;
    }
    enigme(hero1, hero2, hero3) {

        let answered = false;
        let i = 3;
        let choix = Math.ceil(Math.random() * 4);
        let answer;


        while (i > 0 && answered == false) {

            switch (choix) {
                case 1:
                    answer = prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?");
                    if (answer == "le silence") {
                        answered = true
                    }
                    break;
                case 2:
                    answer = prompt("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?");
                    if (answer = "le courant") {
                        answered = true
                    }
                    break;
                case 3:
                    answer = prompt("Quel est l'indice du premier 'i' de cette question ?");
                    if (answer == 11) {
                        answered = true
                    }
                    break;
                case 4:
                    answer = prompt("Que fait retourne Math.floor(1.3 * 10) ?");
                    if (answer == 13) {
                        answered = true
                    }
                    break;
                default:
                    break;
            }
            i--
        }
        if (answered == false) {
            hero1.ptVie = 0;
            hero2.ptVie = 0;
            hero3.ptVie = 0;
        } else {
            this.ptVie = 0;
        }
    }
}


