import {Heros} from './heros.js';
export class Mage extends Heros{
    constructor (nom, ptVIE, ptAttaque, mana){
        super(nom, ptVIE, ptAttaque);
        this.Mana = mana;
    }
    Mana(){
        if (this.mana > 0){
            this.mana = this.mana - 2; //this.mana -= 2;
        } else {
            this.mana = 7;
        }
    }
}