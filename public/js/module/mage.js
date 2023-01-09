import {Heros} from './heros.js';
export class Mage extends Heros{
    constructor (nom, ptVIE, ptAttaque,action, mana){
        super(nom, type,ptVie,ptAttaque, action);
        this.Mana = mana;
    }
    Pouvoir(){
        if (this.mana >= 2){
            this.mana = this.mana - 2; //this.mana -= 2;
        } else {
            this.mana = 7;
        }
    }
}