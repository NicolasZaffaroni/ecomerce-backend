class Contador {

    static globalCount = 0 ;

    constructor(responsible){
        this.responsible = responsible ;
        this.count = 0 ;
    }

    increment(){
        this.count++;
        Contador.globalCount++;

    }

    getIndividualCount(){
        return this.count;
    }


    getResponsible(){
        return this.responsible;
    }
}