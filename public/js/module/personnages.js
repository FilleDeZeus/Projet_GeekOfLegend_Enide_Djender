import {Archer} from './archer.js';
import {Mage} from './mage.js';
import {Guerrier} from './guerrier.js';
import {Boss} from './boss.js';

let totalptVie = 3000;
let totalptAttaque = 400;


//----------------------GUERRIER-----------
//----------POINTS DE VIE-------
alert(`Nous allons bientôt commencer le combat mais avant ca tu vas devoir créer tes Héros donc nous te demanderons d'entrer un nom, un nombre de point de Vie et d'attaque.`)
alert(`Ton total de point de Vie à repartir entre tes Héros est ${totalptVie} et celui de point d'attaque est ${totalptAttaque}.`)
let ptVieGuerrier = +prompt(`Tu as un total de ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton guerrier?`);
    console.log(`Tu as un total de ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton guerrier?`);
    console.log(ptVieGuerrier);
if (ptVieGuerrier > totalptVie) {
    while (ptVieGuerrier > totalptVie ) {
        ptVieGuerrier = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
        console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
    } 
} 
else if (isNaN(ptVieGuerrier) ) {
    while (isNaN(ptVieGuerrier)){
        ptVieGuerrier = +prompt(`Ce n'est pas un nombre. Rentre un nombre`);
        while (ptVieGuerrier > totalptVie) {
            ptVieGuerrier = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
        } 
    }
}


//----------POINTS D'ATTAQUE------
let ptAttaqueGuerrier = +prompt(`Tu as un total de  ${totalptAttaque} points d'attaque. Combien de points d'attaque veux-tu donner à ton guerrier?`);
    console.log(`Tu as un total de  ${totalptAttaque} points d'attaque. Combien de points d'attaque veux-tu donner à ton guerrier?`);
    console.log(ptAttaqueGuerrier);
if (ptAttaqueGuerrier > totalptAttaque) {
    while (ptAttaqueGuerrier > totalptAttaque) {
        ptAttaqueGuerrier = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}`);
        console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}`);
    }
}
else if (isNaN(ptAttaqueGuerrier)){
    while (isNaN(ptAttaqueGuerrier)){
        ptAttaqueGuerrier = +prompt(`Ce n'est pas un nombre. Rentre un nombre`);
        while (ptAttaqueGuerrier > totalptAttaque) {
            ptAttaqueGuerrier = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}`);
            console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
        } 
    }
}

export let guerrier = new Guerrier(prompt("Comment veux-tu appeller ton guerrier?"), ptVieGuerrier, ptAttaqueGuerrier, 0);
console.log("Comment veux-tu appeller ton guerrier?"), ptVieGuerrier, ptAttaqueGuerrier, 0;
console.log(guerrier.nom);
totalptVie = totalptVie - ptVieGuerrier; //totalptVie -= ptVieGuerrier; 
totalptAttaque = totalptAttaque - ptAttaqueGuerrier; //totalptAttaque -= ptAttaqueGuerrier;

//------------------------------MAGE---------------
//----------POINTS DE VIE-------
let ptVieMage = +prompt(`Il te reste ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton Mage?`);
    console.log(`Il te reste ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton Mage?`);
    console.log(ptVieMage);
if (ptVieMage > totalptVie) {
    while(ptVieMage>totalptVie){
        ptVieMage = +prompt(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
        console.log(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
    }
}else if (isNaN(ptVieMage)) {
    while (isNaN(ptVieMage)){
        ptVieMage = +prompt(`Ce n'est pas un nombre. Rentre un nombre`);
        while (ptVieMage > totalptVie) {
            ptVieMage = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
        } 
    }
}
//----------POINTS D'ATTAQUE------
let ptAttaqueMage = +prompt(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Mage?`);
console.log(`Il te reste ${totalptAttaque}points d'attaque. Combien veux-tu en donner à ton Mage?`);
console.log(ptAttaqueMage);
if (ptAttaqueMage > totalptAttaque) {
    while(ptAttaqueMage>totalptAttaque){
    ptAttaqueMage = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
    }
}
else if (isNaN(ptAttaqueMage)) {
    while (isNaN(ptAttaqueMage)){
        ptAttaqueMage = +prompt(`Ce n'est pas un nombre. Rentre un nombre`);
        while (ptAttaqueMage > totalptVie) {
            ptAttaqueMage = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
            console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
        } 
    }
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
console.log(mage.nom);
totalptVie = totalptVie - ptVieMage; //totalptVie -= ptVieMage;
totalptAttaque = totalptAttaque - ptAttaqueMage; // totalptAttaque -= ptAttaqueMage;



//----------------------ARCHER-----------
//----------POINTS DE VIE-------
let ptVieArcher = +prompt(`Il te reste ${totalptVie} points de vie. Combien veux-tu en donner à ton Archer?`);
    console.log(`Il te reste ${totalptVie} points de vie. Combien veux-tu en donner à ton Archer?`);
    console.log(ptVieArcher);
if (ptVieArcher > totalptVie) {
    while(ptVieArcher>totalptVie){
        ptVieArcher = +prompt(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
        console.log(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
    }
}
else if (isNaN(ptVieArcher)) {
    while (isNaN(ptVieArcher)){
        ptVieArcher = +prompt(`Ce n'est pas un nombre. Rentre un nombre`);
        while(ptVieArcher > totalptVie) {
            ptVieArcher = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
        } 
    }
}
//----------POINTS D'ATTAQUE------
let ptAttaqueArcher = +prompt(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Archer?`);
    console.log(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Archer?`);
    console.log(ptAttaqueArcher);
if (ptAttaqueArcher > totalptAttaque) {
    ptAttaqueArcher = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
    console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
}
else if (isNaN(ptAttaqueArcher)) {
    while (isNaN(ptAttaqueArcher)){
        ptAttaqueArcher = +prompt(`Ce n'est pas un nombre. Rentre un nombre`);
        while (ptAttaqueArcher > totalptVie) {
            ptAttaqueArcher = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
            console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
        } 
    }
}
//-------------FLECHE--------
let flechesRandom = [7, 8, 9, 10, 11];
chiffre = Math.round(Math.random() * 4);
let fleches = alert(`Ton archer posséde ${flechesRandom[chiffre]} flèches.`);

console.log(`le nombre de flèches choisies aléatoirement est ${fleches} `);
export let archer = new Archer (prompt("Comment veux-tu appeller ton Archer?"), ptVieArcher, ptAttaqueArcher, fleches);
console.log("Comment veux-tu appeller ton Archer?"), ptVieArcher, ptAttaqueArcher, fleches;
console.log(archer.nom);
totalptVie = totalptVie - ptVieArcher; //totalptVie -= ptVieMage;
totalptAttaque = totalptAttaque - ptAttaqueArcher; // totalptAttaque -= ptAttaqueMage;

//---------------------------BOSS--------------
export let sauron = new Boss("Sauron", 2000, 350);
export let chronos = new Boss("Chronos", 1500, 425);
export let lilith = new Boss("Lilith", 1000, 500);