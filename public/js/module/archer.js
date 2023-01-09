import {Heros} from './heros.js';
export class Archer extends Heros{
    constructor (nom, ptVIE, ptAttaque, action, nbrFleches){
        super(nom, type,ptVie,ptAttaque, action);
        this.nbrFleches = nbrFleches;
    }
    Fleche(){
        if (this.nbrFleches>=2){
            this.nbrFleches = this.nbrFleches - 1; //this.nbrfleche -= 1;
            if (this.nbrFleches >= 2);
        } else if (this.nbr = 0){
            this.nbrFleches = 6
        } else {
            this.nbrFleche = this.nbrFleches + 1; //this.nbrfleche += 1;
        }
    }
}

