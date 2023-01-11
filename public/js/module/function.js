
import * as instance from './instances.js';

export function fonctionTableau(tableau) {
    let rand = Math.random()*tableau.length | 0;
    let randValeur = tableau[rand];
    return randValeur;
}

//attaque guerrier
export function attaqueGuerrier(element) {
    instance.tabBoss.ptVie -= element.ptAttaque;
    if (element.rage <= 3) {
        element.rage ++ ;
        //bonus attaque
        if(element.rage >=4) {
            element.ptAttaque *= 1.25;
            console.log(`La rage de ${element.nom} est passée à ${element.rage}, il passe en Berserk, il aura ${element.ptAttaque} d'attaque pour le prochain tour`);
            element.rage = 0;
        } else {
            element.ptAttaque = 10;
            console.log(`La rage de ${element.nom} est passée à ${element.rage}`);
        }                
    } 
}

//attaque mage
export function attaqueMage(element) {
    if (element.mana < 2) {
        console.log(`${element.nom} n'as plus assez de mana pour attaquer, il doit attendre le tour suivant`);
        element.mana = 7;
    } else {
        instance.tabBoss.ptVie -= element.ptAttaque;
        element.mana -= 2 ;
        console.log(`Le mana de ${element.nom} est passé à ${element.mana}`);
    }   
}

//attaque archer
export function attaqueArcher(element){
    if (element.fleche < 2) {
        console.log(`${element.nom} n'as plus assez de flèches, il doit attendre le tour suivant`);
        element.fleche = 6;
    }else {
        element.fleche -= 2;
        instance.tabBoss.ptVie -= element.ptAttaque;
        console.log(`Il reste ${element.fleche} flèches à ${element.nom}`);
        element.fleche ++;
    }
}

//attaque boss
export function attaqueBoss(element){
    let heroAleatoire = fonctionTableau(element);
    let cimtiere = [];
    heroAleatoire.ptVie -= instance.tabBoss.ptAttaque;
    console.log(`${instance.tabBoss.nom} frappe ${heroAleatoire.nom}. Il reste ${heroAleatoire.ptVie} points de vie a ${heroAleatoire.nom}`);
    //Defaite si tout le monde mort
    if (heroAleatoire.ptVie <= 0) {
        cimtiere = element.splice(element.indexOf(heroAleatoire), 1);
    }
    
}