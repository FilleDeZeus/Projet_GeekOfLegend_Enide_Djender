import {Archer} from './archer.js';
import {Mage} from './mage.js';
import {Guerrier} from './guerrier.js';
import {Boss} from './boss.js';

let totalptVie = 3000;
let totalptAttaque = 400;


//----------------------GUERRIER-----------
//----------POINTS DE VIE-------
let ptVieGuerrier = +prompt(`Tu as un total de ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton guerrier?`);
console.log(`Tu as un total de ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton guerrier?`);
if (ptVieGuerrier > totalptVie) {
    while (ptVieGuerrier > totalptVie) {
        ptVieGuerrier = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
    console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
    }
}
//----------POINTS D'ATTAQUE------
let ptAttaqueGuerrier = +prompt(`Tu as un total de ${totalptAttaque} points d'attaque. Combien de points d'attaque veux-tu donner à ton guerrier?`);
console.log(`Tu as un total de ${totalptAttaque} points d'attaque. Combien de points d'attaque veux-tu donner à ton guerrier?`);
if (ptAttaqueGuerrier > totalptAttaque) {
    while (ptAttaqueGuerrier > totalptAttaque) {
        ptAttaqueGuerrier = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}`);
    console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}`);
    }
}

export let guerrier = new Guerrier(prompt("Comment veux-tu appeller ton guerrier?"), ptVieGuerrier, ptAttaqueGuerrier, 0);
console.log("Comment veux-tu appeller ton guerrier?"), ptVieGuerrier, ptAttaqueGuerrier, 0;
totalptVie = totalptVie - ptVieGuerrier; //totalptVie -= ptVieGuerrier; 
totalptAttaque = totalptAttaque - ptAttaqueGuerrier; //totalptAttaque -= ptAttaqueGuerrier;

//------------------------------MAGE---------------
//----------POINTS DE VIE-------
let ptVieMage = +prompt(`Il te reste ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton Mage?`);
console.log(`Il te reste ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton Mage?`);
if (ptVieMage > totalptVie) {
    ptVieMage = +prompt(`Il ne te reste pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
    console.log(`Il ne te reste pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
}
//----------POINTS D'ATTAQUE------
let ptAttaqueMage = +prompt(`Il te reste ${totalptAttaque}points d'attaque. Combien veux-tu en donner à ton Mage?`);
console.log(`Il te reste ${totalptAttaque}points d'attaque. Combien veux-tu en donner à ton Mage?`);
if (ptAttaqueMage > totalptAttaque) {
    ptAttaqueMage = +prompt(`Il ne te reste pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
console.log(`Il ne te reste pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
}
//------------MANA-----------
let chiffre = Math.ceil(Math.random() * 3);
let mana;
switch (chiffre) {
    case 1:
        mana = 7;
        break;
    case 2:
        mana = 9;
        break;
    case 3:
        mana = 11;
        break;
    default:
        break;
}

export let mage = new Mage(prompt("Comment veux-tu appeller ton Mage?"), ptVieMage, ptAttaqueMage, mana);
console.log("Comment veux-tu appeller ton Mage?"), ptVieMage, ptAttaqueMage, mana;
totalptVie = totalptVie - ptVieMage; //totalptVie -= ptVieMage;
totalptAttaque = totalptAttaque - ptAttaqueMage; // totalptAttaque -= ptAttaqueMage;



//----------------------ARCHER-----------
//----------POINTS DE VIE-------
let ptVieArcher = +prompt(`Il te reste ${totalptVie} points de vie. Combien veux-tu en donner à ton Archer?`);
console.log(`Il te reste ${totalptVie} points de vie. Combien veux-tu en donner à ton Archer?`);
if (ptVieArcher > totalptVie) {
    ptVieArcher = +prompt(`Il ne te reste pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
console.log(`Il ne te reste pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
}
//----------POINTS D'ATTAQUE------
let ptAttaqueArcher = +prompt(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Archer?`);
console.log(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Archer?`);
if (ptAttaqueArcher > totalptAttaque) {
    ptAttaqueArcher = +prompt(`Il ne te reste pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
console.log(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Archer?`);
}
//-------------FLECHE--------
let flechesRandom = [7, 8, 9, 10, 11];
chiffre = Math.round(Math.random() * 4);
let fleches = flechesRandom[chiffre];

export let archer = new Archer (prompt("Comment veux-tu appeller ton Archer?"), ptVieArcher, ptAttaqueArcher, fleches);
console.log("Comment veux-tu appeller ton Archer?"), ptVieArcher, ptAttaqueArcher, fleches;


//---------------------------BOSS--------------
export let sauron = new Boss("Sauron", 1000, 300);
export let chronos = new Boss("Chronos", 1000, 400);
export let lilith = new Boss("Lilith", 1&400, 500);