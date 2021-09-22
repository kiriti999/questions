import { Parent } from './parent';

export class MyChild extends Parent {
    
    constructor() {
        super();
        this.output();
    }

    output() {
        console.log('child ', MyChild);
    }
}