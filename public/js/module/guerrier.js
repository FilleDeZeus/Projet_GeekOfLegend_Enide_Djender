import {Heros} from './heros.js';
export class Guerrier extends Heros{
    constructor (nom, ptVIE, ptAttaque, ptRage, action){
        super(nom, type,ptVie,ptAttaque, action);
        this.ptRage = ptRage;
    }
    Rage() {
        
        if (this.ptRage < 4){
            this.ptRage = this.ptRage + 1; // this.ptRage += ptRage
        }
        else if (this.ptRage ==4){
            this.ptRage = 0;
            return this.ptAttaque = this.ptAttaque * 1.25; //this.pa *= 1.25;
        }else{
            return this.ptAttaque;
        }
        }
    }
