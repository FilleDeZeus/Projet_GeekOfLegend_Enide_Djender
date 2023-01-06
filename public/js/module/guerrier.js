import {Heros} from './heros.js';
export class Guerrier extends Heros{
    constructor (nom, ptVIE, ptAttaque, ptRage){
        super(nom, ptVIE, ptAttaque);
        this.ptRage = ptRage;
    }
}