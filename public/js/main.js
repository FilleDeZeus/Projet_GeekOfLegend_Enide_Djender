import * as instance from './module/instances.js';
import * as funct from './module/function.js';

//boss
console.log("Bienvenu dans Geek Of Legends");
alert("Bienvenu dans Geek Of Legends")
console.log(`Aujourd'hui, tu vas devoir affronter ${instance.tabBoss.nom}.`);
alert(`Aujourd'hui, tu vas devoir affronter ${instance.tabBoss.nom}.`);
console.log(`Nous allons bientôt commencer le combat mais avant ca tu vas créer tes Héros donc nous te demanderons d'entrer un nom, un nombre de point de vie et d'attaque.`);
alert(`Nous allons bientôt commencer le combat mais avant ca tu vas devoir créer tes Héros donc nous te demanderons d'entrer un nom, un nombre de point de vie et d'attaque.`)

//nom hero
instance.guerrier.nom = prompt("Choissisez le nom de votre guerrier");
console.log(instance.guerrier.nom);
instance.mage.nom = prompt("Choissisez le nom de votre mage");
console.log(instance.mage.nom);
instance.archer.nom = prompt("Choissisez le nom de votre archer");
console.log(instance.archer.nom);

let totalptVie = 3000;
let totalptAttaque = 400;


alert(`Ton total de point de vie à repartir entre tes Héros est ${totalptVie} et celui de point d'attaque est ${totalptAttaque}.`)
console.log(`Ton total de point de vie à repartir entre tes Héros est ${totalptVie} et celui de point d'attaque est ${totalptAttaque}.`);

alert(`Ton adversaire est ${instance.tabBoss.nom}. Il posséde ${instance.tabBoss.ptVie} points de vie et ${instance.tabBoss.ptAttaque} points d'attaque.`);

//------------------------POINTS DE VIE--------------
//-------GUERRIER------------

instance.guerrier.ptVie = +prompt(`Tu as un total de ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton guerrier?`);
    console.log(`Tu as un total de ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton guerrier?`);
    console.log(instance.guerrier.ptVie);
if (instance.guerrier.ptVie > totalptVie) {
    while (instance.guerrier.ptVie > totalptVie ) {
        instance.guerrier.ptVie = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
        console.log(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
    } 
} 
else if (isNaN(instance.guerrier.ptVie) ) {
    while (isNaN(instance.guerrier.ptVie)){
        instance.guerrier.ptVie = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
        console.log(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
        while (instance.guerrier.ptVie > totalptVie) {
            instance.guerrier.ptVie = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
        } 
    }
}
else if(instance.guerrier.ptVie <0){
    while (instance.guerrier.ptVie <0){
        instance.guerrier.ptVie = +prompt(`Veuillez rentrer un nombre positif, s'il vous plait`);
        console.log(`Veuillez rentrer un nombre positif, s'il vous plait`);
        while (isNaN(instance.guerrier.ptVie)){
            instance.guerrier.ptVie = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
            console.log(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
            while (instance.guerrier.ptVie > totalptVie) {
                instance.guerrier.ptVie = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
                console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            } 
        }
    }
}
totalptVie -= instance.guerrier.ptVie; 
//-------MAGE------------

instance.mage.ptVie = +prompt(`Il te reste ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton Mage?`);
    console.log(`Il te reste ${totalptVie} points de vie. Combien de points de vie veux-tu donner à ton Mage?`);
    console.log(instance.mage.ptVie);
if (instance.mage.ptVie > totalptVie) {
    while(instance.mage.ptVie>totalptVie){
        instance.mage.ptVie = +prompt(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
        console.log(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
    }
}else if (isNaN(instance.mage.ptVie)) {
    while (isNaN(instance.mage.ptVie)){
        instance.mage.ptVie = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
        while (instance.mage.ptVie > totalptVie) {
            instance.mage.ptVie = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
        } 
    }
}
else if(instance.guerrier.ptVie <0){
    while (instance.guerrier.ptVie <0){
        instance.guerrier.ptVie = +prompt(`Veuillez rentrer un nombre positif, s'il vous plait`);
        console.log(`Veuillez rentrer un nombre positif, s'il vous plait`);
        while (isNaN(instance.guerrier.ptVie)){
            instance.guerrier.ptVie = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
            console.log(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
            while (instance.guerrier.ptVie > totalptVie) {
                instance.guerrier.ptVie = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
                console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            } 
        }
    }
}
totalptVie -= instance.mage.ptVie; 
//-------ARCHER------------

instance.archer.ptVie = +prompt(`Il te reste ${totalptVie} points de vie. Combien veux-tu en donner à ton Archer?`);
    console.log(`Il te reste ${totalptVie} points de vie. Combien veux-tu en donner à ton Archer?`);
    console.log(instance.archer.ptVie);
if (instance.archer.ptVie > totalptVie) {
    while(instance.archer.ptVie>totalptVie){
        instance.archer.ptVie = +prompt(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
        console.log(`Tu n'as pas assez de points de vie. Rentre une valeur en dessous de ${totalptVie}.`);
    }
}
else if (isNaN(instance.archer.ptVie)) {
    while (isNaN(instance.archer.ptVie)){
        instance.archer.ptVie = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
        while(instance.guerrier.ptAttaque > totalptVie) {
            instance.archer.ptVie = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
        } 
    }
}
else if(instance.guerrier.ptVie <0){
    while (instance.guerrier.ptVie <0){
        instance.guerrier.ptVie = +prompt(`Veuillez rentrer un nombre positif, s'il vous plait`);
        console.log(`Veuillez rentrer un nombre positif, s'il vous plait`);
        while (isNaN(instance.guerrier.ptVie)){
            instance.guerrier.ptVie = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
            console.log(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
            while (instance.guerrier.ptVie > totalptVie) {
                instance.guerrier.ptVie = +prompt(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
                console.log(`Tu n'as pas assez de points de vie.Rentre une valeur en dessous de ${totalptVie}.`);
            } 
        }
    }
}
totalptVie -= instance.archer.ptVie; 
//------------------------POINTS D'ATTAQUE--------------
//-------GUERRIER------------
instance.guerrier.ptAttaque = +prompt(`Tu as un total de  ${totalptAttaque} points d'attaque. Combien de points d'attaque veux-tu donner à ton guerrier?`);
    console.log(`Tu as un total de  ${totalptAttaque} points d'attaque. Combien de points d'attaque veux-tu donner à ton guerrier?`);
    console.log(instance.guerrier.ptAttaque);
if (instance.guerrier.ptAttaque > totalptAttaque) {
    while (instance.guerrier.ptAttaque > totalptAttaque) {
        instance.guerrier.ptAttaque = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}`);
        console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}`);
    }
}
else if (isNaN(instance.guerrier.ptAttaque)){
    while (isNaN(instance.guerrier.ptAttaque)){
        instance.guerrier.ptAttaque = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
        while (instance.guerrier.ptAttaque > totalptAttaque) {
            instance.guerrier.ptAttaque = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}`);
            console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
        } 
    }
}
totalptAttaque -= instance.guerrier.ptAttaque;
//-------MAGE------------
instance.mage.ptAttaque = +prompt(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Mage?`);
console.log(`Il te reste ${totalptAttaque}points d'attaque. Combien veux-tu en donner à ton Mage?`);
console.log(instance.mage.ptAttaque);
if (instance.mage.ptAttaque > totalptAttaque) {
    while(instance.mage.ptAttaque>totalptAttaque){
    instance.mage.ptAttaque = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
    }
}
else if (isNaN(instance.mage.ptAttaque)) {
    while (isNaN(instance.mage.ptAttaque)){
        instance.mage.ptAttaque = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
        while (instance.mage.ptAttaque > totalptVie) {
            instance.mage.ptAttaque = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
            console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
        } 
    }
}
totalptAttaque -= instance.mage.ptAttaque;
//-------ARCHER------------
instance.archer.ptAttaque = +prompt(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Archer?`);
    console.log(`Il te reste ${totalptAttaque} points d'attaque. Combien veux-tu en donner à ton Archer?`);
    console.log(instance.archer.ptAttaque);
if (instance.archer.ptAttaque > totalptAttaque) {
    instance.archer.ptAttaque = +prompt(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
    console.log(`Tu n'as pas assez de points d'attaque. Rentre une valeur en dessous de ${totalptAttaque}.`);
}
else if (isNaN(instance.archer.ptAttaque)) {
    while (isNaN(instance.archer.ptAttaque)){
        instance.archer.ptAttaque = +prompt(`Ceci n'est pas un nombre. Veuillez rentrer un nombre, s'il vous plait`);
        while (instance.archer.ptAttaque > totalptVie) {
            instance.archer.ptAttaque = +prompt(`Tu n'as pas assez de points d'attaque.\n Rentre une valeur en dessous de ${totalptAttaque}.`);
            console.log(`Tu n'as pas assez de points d'attaque.\n Rentre une valeur en dessous de ${totalptAttaque}.`);
        } 
    }
}
totalptAttaque -= instance.archer.ptAttaque;

alert(`\nLe nom du Guerrier: ${instance.guerrier.nom} \nLe nombre de points de vie: ${instance.guerrier.ptVie} et de points d'attaque: ${instance.guerrier.ptAttaque}\nLe nom du Mage: ${instance.mage.nom} \nLe nombre de points de vie: ${instance.mage.ptVie} et de points d'attaque: ${instance.mage.ptAttaque}\nLe nom de l'Archer: ${instance.archer.nom}\nLe nombre de points de vie: ${instance.archer.ptVie} et de points d'attaque: ${instance.archer.ptAttaque}`);
console.log(`\nLe nom du Guerrier: ${instance.guerrier.nom} \nLe nombre de points de vie: ${instance.guerrier.ptVie} et de points d'attaque:${instance.guerrier.ptAttaque}\nLe nom du Mage: ${instance.mage.nom} \nLe nombre de points de vie: ${instance.mage.ptVie} et de points d'attaque: ${instance.mage.ptAttaque}\nLe nom de l'Archer: ${instance.archer.nom} \nLe nombre de points de vie: ${instance.archer.ptVie} et de points d'attaque: ${instance.archer.ptAttaque}`);
//hero
console.log(instance.guerrier);
console.log(instance.mage);
console.log(instance.archer);


let equipe = [instance.guerrier, instance.mage, instance.archer];

let ptVieBossPersonnages = instance.tabBoss.ptVie;
// console.log(ptVieBossPersonnages);
let action;

//Boucle generale
while (instance.tabBoss.ptVie > 0 && (instance.guerrier.ptVie > 0 || instance.mage.ptVie > 0 || instance.archer.ptVie > 0)) {

    if (instance.tabBoss.ptVie > 0 && (instance.guerrier.ptVie > 0 || instance.mage.ptVie > 0 || instance.archer.ptVie > 0)) {

         // suivi points de vie
        console.log(`${instance.guerrier.nom} lui reste ${instance.guerrier.ptVie} de points de vie et ${instance.guerrier.rage} points de rage \n ${instance.mage.nom} lui reste ${instance.mage.ptVie} de points de vie et ${instance.mage.mana} points de mana \n ${instance.archer.nom} lui reste ${instance.archer.ptVie} de points de vie et ${instance.archer.fleche} de flèches \n  ${instance.tabBoss.nom} lui reste ${instance.tabBoss.ptVie} de points de vie `);

        //choix action
        action = prompt("Quelle action voulez vous choisir pour ce tour : défense, attaque, pacifique");
        // });
         //Chacque perso tape a son tour
        for(let membre of equipe){

            if (instance.tabBoss.ptVie > 0 && (instance.guerrier.ptVie > 0 || instance.mage.ptVie > 0 || instance.archer.ptVie > 0)) {
                //actifer action combat
                if(action == "défense" ) {
                    console.log("L'action est la defense");
                    alert("L'action est la defense");
                    membre.defense("start");
                } else if (action == "attaque") {
                    console.log("L'action est l'attaque");
                    alert("L'action est l'attaque");
                    membre.attaque("start");
                } else if (action == "pacifique") {
                    console.log("L'action est pacifique");
                    alert("L'action est pacifique");
                    membre.pacifique("start");
                }
            }
            //tant que le boss est en vie
            if (instance.tabBoss.ptVie > 0 && (instance.guerrier.ptVie > 0 || instance.mage.ptVie > 0 || instance.archer.ptVie > 0)) {
                //console.log(`Action : ${membre.nom} frappe ${instance.tabBoss.nom} -> ${instance.tabBoss.nom} ${instance.tabBoss.ptVie} points de vie - ${membre.ptAttaque} points de d'attaque`);
                //attaque hero
                switch (membre) {
                    case instance.guerrier:
                        //attaque guerrier
                        funct.attaqueGuerrier(membre);
                        break;

                    case instance.mage:
                        //attaque mage
                        funct.attaqueMage(membre);                
                        break;

                    case instance.archer:
                        //ataque archer
                        funct.attaqueArcher(membre)
                        break;
                
                    default:
                        console.log("error");
                        break;
                }
                console.log(`${membre.nom} frappe ${instance.tabBoss.nom}. Il reste ${instance.tabBoss.ptVie} points de vie à ${instance.tabBoss.nom}`);
                //lancement enigme boss -20%points de vie
                if (instance.tabBoss.ptVie <= ptVieBossPersonnages/5 && instance.tabBoss.ptVie > 0 && (instance.guerrier.ptVie > 0 || instance.mage.ptVie > 0 || instance.archer.ptVie > 0)){
                    alert(`${instance.tabBoss.nom} est bientôt mort. Pour l'achever répond à cette énigme. Si tu trouves la réponse tu gagnes, sinon, tu perds.`);
                    console.log(`${instance.tabBoss.nom} est bientôt mort. Pour l'achever répond à cette énigme. Si tu trouves la réponse tu gagnes, sinon, tu perds.`);
                    instance.tabBoss.Enigme(instance.guerrier, instance.mage, instance.archer);
                    let finEnigme = instance.tabBoss.enigme(equipe);
                    if (finEnigme == true){
                        instance.tabBoss.ptVie = 0;
                    } else if (finEnigme == false){
                        equipe = [];
                    }
                }
                
                //-----------VICTOIRE------------
                if (instance.tabBoss.ptVie <= 0) {
                    alert(`Tu as gagné contre ${instance.tabBoss.nom}. Félicitations!`);
                    console.log(`Tu as gagné contre ${instance.tabBoss.nom}. Félicitations!`);
                    
                }

            }

        };

    }     
    
    //Le boss tape un perso aleatoire
    if (instance.tabBoss.ptVie > 0 && equipe.length != 0) {
        funct.attaqueBoss(equipe);
    }

    //desactiver action combat hero
    if(action == "defense" ) {
        instance.guerrier.defense("end");
        instance.mage.defense("end");
        instance.archer.defense("end");
    } else if (action == "attaque") {
        instance.guerrier.attaque("end");
        instance.mage.attaque("end");
        instance.archer.attaque("end");
    }
    //DEFAITE
    if (equipe.length == 0) {
        //stop boucle infini
        instance.tabBoss.ptVie = 0;
        alert(" Tu as été vaincu. Un peu plus d'entrainement et la prochaine sera peut être la bonne.");
        console.log("Tu as été vaincu. Un peu plus d'entrainement et la prochaine sera peut être la bonne.");
    }
}