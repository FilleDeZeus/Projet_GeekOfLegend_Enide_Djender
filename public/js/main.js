import { guerrier, mage, archer, sauron, chronos, lilith } from "./module/personnages.js";
import { Heros } from "./module/heros.js";
let bossVaincu = [];
let tableauBoss = [sauron, chronos, lilith];

let tableauHeros = [guerrier, mage, archer];

//Choix aléatoire du Boss
function BossAleatoire() {
    return tableauBoss[Math.round(Math.random() * 2)];
}
let boss = BossAleatoire();

//Choix de l'action des heros
function action() {
    alert(`Ton adversaire est ${boss.nom}. Choisis l'action de tes combattants (attaque, défense, normal):`)
    let actionGuerrier = prompt(`Quelle sera l'action de ${guerrier.nom}?`);
    switch (actionGuerrier) {
        case "attaque":
            guerrier.Attaque();
            break;
        case "défense":
            guerrier.Defense();
            tableauHeros.push(guerrier);
            break;
        case "normal":
            break;
        default:
            break;
    }
    let actionMage = prompt(`Quelle sera l'action de ${mage.nom}?`);
    switch (actionMage) {
        case "attaque":
            mage.Attaque();
            break;
        case "défense":
            mage.Defense();
            tableauHeros.push(mage);
            break;
        case "normal":
            break;
        default:
            break;
    }
    let actionArcher = prompt(`Quelle sera l'action de ${archer.nom}?`);
    switch (actionArcher) {
        case "attaque":
            archer.Attaque();
            break;
        case "défense":
            archer.Defense();
            tableauHeros.push(archer);
            break;
        case "normal":
            break;
        default:
            break;
    }
}

//Fonction combat
function combat() {

    alert("Le combat va commencer!")
    console.log("Le combat va commencer!");
    let vingt = boss.ptVie / 5;

    while (boss.ptVie > vingt && (guerrier.ptVie > 0 || archer.ptVie > 0 || mage.ptVie > 0)) {

        guerrier.Rage();
        mage.Pouvoir();

        // Attaques des héros
        if (guerrier.ptVie > 0) {
            alert(`${guerrier.nom} attaque ${boss.nom}`);
            boss.ptVie -= guerrier.ptAttaque;
            alert(`${boss.nom} perd ${guerrier.ptAttaque} points de vie. Il lui reste ${boss.ptVie}pv`);
        }

        if (archer.ptVie > 0 && boss.ptVie > 0 && archer.fleches >= 2) {
            alert(`${archer.nom} attaque ${boss.nom}`)
            boss.ptVie -= archer.ptAttaque;
            alert(`${boss.nom} perd ${archer.ptAttaque} points de vie. Il lui reste ${boss.ptVie}pv`);
            archer.nbreFleche();
        } else if (archer.ptVie > 0 && archer.fleches < 2) {
            alert(`${archer.nom} n'a plus de flèches. Il passe un tour.`)
        }

        if (mage.ptVie > 0 && boss.ptVie > 0 && mage.mana >= 2) {
            alert(`${mage.nom} attaque ${boss.nom}`)
            boss.ptVie -= mage.ptAttaque;
            alert(`${boss.nom} perd ${mage.ptAttaque} points de vie. Il lui reste ${boss.ptVie}pv`);
        } else if (mage.ptVie > 0 && mage.mana < 2) {
            alert(`${mage.nom} n'a plus de mana. Il passe un tour.`)
        }

        //Choix de la victime du boss
        let defenseur = tableauHeros[Math.floor(Math.random() * tableauHeros.length)];
        while (defenseur.ptVie <= 0) {
            defenseur = tableauHeros[Math.floor(Math.random() * tableauHeros.length)];
        }

        //Attaque du boss
        if (boss.ptVie > vingt) {
            alert(`${boss.nom} attaque ${defenseur.nom}`);
            defenseur.ptVie -= boss.ptAttaque;
            if (defenseur.ptVie >= 0) {
                alert(`${defenseur.nom} perd ${boss.ptAttaque} points de vie. Il lui reste ${defenseur.ptVie}pv`);
            } else {
                alert(`Attaque critique! ${defenseur.nom} n'a plus de pv.`);
            }
        }

        if (defenseur.ptVie <= 0) {
            alert(`${defenseur.nom} est mort`);
        }
    }
    if (boss.ptVie < vingt) {
        alert(`${boss.nom} est bientôt mort. En dernière resource, il lance énigme. Si tu trouves la réponse tu gagnes, sinon, tu perds.`);
        boss.enigme(guerrier, mage, archer);
    }

    if (boss.ptVie <= 0) {
        alert(`Tu as vaincu ${boss.nom}. Félicitations!`);
    } else if (guerrier.ptVie <= 0 && archer.ptVie <= 0 && mage.ptVie <= 0) {
        alert(`Tu as été vaincu. Un peu plus d'entrainement et la prochaine sera peut être la bonne`);
    }
}

BossAleatoire()
action()
combat()