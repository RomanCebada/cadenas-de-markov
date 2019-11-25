class Markov{
    constructor() {

    }
    resolver(ini,P11,P12,P22,P21,cant) {
        if(ini == 'S1'){
            var PS1,PS2;
            for(let i=0;i<cant;i++){
                if(i==0){
                    let temp1 = Math.pow(P11,2)+(P12)(P21);
                    let temp2 = 1 - temp1;
                    PS1 = temp1;
                    PS2 = temp2;
                }
                else{
                    let temp1 = (PS1)(P11)+(PS2)(P21);
                    let temp2 = 1 - temp1;
                    PS1 = temp1;
                    PS2 = temp2;
                }
            }
        }
        else{
            var PS1,PS2;
            for(let i=0;i<cant;i++){
                if(i==0){
                    let temp1 = Math.pow(P22,2)+(P21)(P12);
                    let temp2 = 1 - temp1;
                    PS1 = temp1;
                    PS2 = temp2;
                }
                else{
                    let temp1 = (PS1)(P22)+(PS2)(P12);
                    let temp2 = 1 - temp1;
                    PS1 = temp1;
                    PS2 = temp2;
                }
            }
        }
        var final = PS1 + " " + PS2;
        return final;
    }
}