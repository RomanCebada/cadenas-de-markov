class Markov {
    constructor() {

    }

    calcular( t11, t12, t21, t22, periodos, iniciar) {
        var pS1,pS2,resultado;
        if(iniciar=='S1'){
            pS1 = (t11 * t11) + (t12 * t21);
            pS2 = 1 - pS1;
            resultado = [];
            for(let x = 1; x <= periodos; x++){
                resultado.push(this.calcularRecursivo(t11, t12, t21, t22));
                pS1 = resultado[0];
                pS2 = resultado[1];
            }
        }
        
        return resultado;
    }

    calcularRecursivo(t11, t12, t21, t22) {
        let pS1 = (p1 * t11) + (t12 * t21);
        let pS2 = 1 - pS1;
        let resultado = [pS1, pS2];
        return resultado;
    }
}