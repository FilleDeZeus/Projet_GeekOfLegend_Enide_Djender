import * as personnage from './class.js';
import * as fonction from './function.js';

//boss
export let tabBoss = fonction.fonctionTableau([
    new personnage.Boss('Sauron', 2000, 350),
    new personnage.Boss('Chronos', 1500, 425),
    new personnage.Boss('Lilith', 1000, 500)
]);

//hero
export let guerrier = new personnage.Heros('nom', "ptVie", "ptAttaque");
guerrier.rage = 0;

export let mage = new personnage.Heros('nom', "ptVie", "ptAttaque");
mage.mana = fonction.fonctionTableau([7,9,11]);

export let archer = new personnage.Heros('nom', "ptVie", "ptAttaque");
archer.fleche = fonction.fonctionTableau([7, 8 , 9 ,10 ,11]);