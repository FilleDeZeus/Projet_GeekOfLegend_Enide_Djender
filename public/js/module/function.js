
import * as instance from './instances.js';

export function fonctionTableau(tableau) {
    let niveau = Math.random()*tableau.length | 0;
    let niveauValeur = tableau[niveau];
    return niveauValeur;
}

//attaque guerrier
export function attaqueGuerrier(pouvoir) {
    instance.tabBoss.ptVie -= pouvoir.ptAttaque;
    if (pouvoir.rage <= 3) {
        pouvoir.rage ++ ;
        //bonus attaque
        if(pouvoir.rage >=4) {
            pouvoir.ptAttaque *= 1.25;
            console.log(`La rage de ${pouvoir.nom} est passée à ${pouvoir.rage}, il passe en Berserk, il aura ${pouvoir.ptAttaque} d'attaque pour le prochain tour`);
            alert(`La rage de ${pouvoir.nom} est passée à ${pouvoir.rage}, il passe en Berserk, il aura ${pouvoir.ptAttaque} d'attaque pour le prochain tour`)
            pouvoir.rage = 0;
        } else {
            pouvoir.ptAttaque = 10;
            console.log(`La rage de ${pouvoir.nom} est passée à ${pouvoir.rage}`);
            alert(`La rage de ${pouvoir.nom} est passée à ${pouvoir.rage}`)
        }                
    } 
}

//attaque mage
export function attaqueMage(pouvoir) {
    if (pouvoir.mana < 2) {
        console.log(`${pouvoir.nom} n'as plus assez de mana pour attaquer, il doit attendre le tour suivant`);
        alert(`${pouvoir.nom} n'as plus assez de mana pour attaquer, il doit attendre le tour suivant`);
        pouvoir.mana = 7;
    } else {
        instance.tabBoss.ptVie -= pouvoir.ptAttaque;
        pouvoir.mana -= 2 ;
        console.log(`Le mana de ${pouvoir.nom} est passé à ${pouvoir.mana}`);
        alert(`Le mana de ${pouvoir.nom} est passé à ${pouvoir.mana}`);
    }   
}

//attaque archer
export function attaqueArcher(pouvoir){
    if (pouvoir.fleche < 2) {
        console.log(`${pouvoir.nom} n'as plus assez de flèches, il doit attendre le tour suivant`);
        alert(`${pouvoir.nom} n'as plus assez de flèches, il doit attendre le tour suivan`);
        pouvoir.fleche = 6;
    }else {
        pouvoir.fleche -= 2;
        instance.tabBoss.ptVie -= pouvoir.ptAttaque;
        console.log(`Il reste ${pouvoir.fleche} flèches à ${pouvoir.nom}`);
        alert(`Il reste ${pouvoir.fleche} flèches à ${pouvoir.nom}`);
        pouvoir.fleche ++;
    }
}

//attaque boss
export function attaqueBoss(pouvoir){
    let heroAleatoire = fonctionTableau(pouvoir);
    let cimtiere = [];
    heroAleatoire.ptVie -= instance.tabBoss.ptAttaque;
    console.log(`${instance.tabBoss.nom} frappe ${heroAleatoire.nom}. Il reste ${heroAleatoire.ptVie} points de vie a ${heroAleatoire.nom}`);
    alert(`${instance.tabBoss.nom} frappe ${heroAleatoire.nom}. Il reste ${heroAleatoire.ptVie} points de vie a ${heroAleatoire.nom}`)
    //Defaite si tout le monde mort
    if (heroAleatoire.ptVie <= 0) {
        cimtiere = pouvoir.splice(pouvoir.indexOf(heroAleatoire), 1);
    }
    
}