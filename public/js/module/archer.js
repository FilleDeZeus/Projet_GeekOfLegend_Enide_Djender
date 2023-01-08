import {Heros} from './heros.js';
export class Archer extends Heros{
    constructor (nom, ptVIE, ptAttaque, nbrFleches){
        super(nom, ptVIE, ptAttaque);
        this.nbrFleches;
    }
    Fleche(){
        if (this.nbrfleche>=2){
            this.nbrfleche = this.nbrFleches - 1; //this.nbrfleche -= 1;
            if (this.nbrfleche >= 2);
        } else if (this.nbr = 0){
            this.nbrfleche = 6
        } else {
            this.nbrfleche = this.nbrfleche + 1; //this.nbrfleche += 1;
        }
    }
}

