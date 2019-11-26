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
    console.log(markov.resolver(ini,P11,P12,P22,P21,cant));
});