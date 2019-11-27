document.getElementById('res').addEventListener('click',()=>{
    if(document.getElementById('est').checked){
        var ini = document.getElementById('est').value;
    }
    var P11 = parseFloat(document.getElementById('P11').value);
    var P12 = parseFloat(document.getElementById('P12').value);
    var P22 = parseFloat(document.getElementById('P22').value);
    var P21 = parseFloat(document.getElementById('P21').value);
    var cant = parseInt(document.getElementById('cant').value);

    const markov = new Markov();
    var resultadosFinales = markov.resolver(ini,P11,P12,P22,P21,cant);
    var final = resultadosFinales.split(' ');
    if(ini=='S1'){
        document.getElementById('success1').innerHTML = `<div class="bg-success rounded py-5">La probabilidad de S1 despues de ${cant} estados es de: ${(final[0]*100).toFixed(3)}% en base a los datos ingresados anteriormente</div>`;
    }
    else{
        document.getElementById('success1').innerHTML = `<div class="bg-success rounded py-5">La probabilidad de S2 despues de ${cant} estados es de: ${(final[1]*100).toFixed(3)}% en base a los datos ingresados anteriormente</div>`;
    }

    document.getElementById('P11').value ="";
    document.getElementById('P12').value ="";
    document.getElementById('P22').value ="";
    document.getElementById('P21').value ="";
    document.getElementById('cant').value ="";
    document.getElementById('est').checked=false;
});
