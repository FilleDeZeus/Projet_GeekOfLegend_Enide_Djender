import {Heros} from './heros.js';
export class Archer extends Heros{
    constructor (nom, ptVIE, ptAttaque, nbrFleches){
        super(nom, ptVIE, ptAttaque);
        this.nbrFleches;
    }
}