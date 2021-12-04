const nvdjTijd = new Date('October 21 2022 20:00:00');
//update countdowntijd
var update = setInterval(function (){
    var nu = new Date();
    var verschil = nvdjTijd - nu;
    //omzetting naar dagen, uren, minuten en seconden
    var d = Math.floor(verschil/(1000*60*60*24));
    var h = Math.floor((verschil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((verschil % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((verschil % (1000 * 60)) / 1000);
    //plaats nummers in countdown
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h < 10 ? '0'+ h : h;     //als h<10 zetteen we 0h, anders gewoon h
    document.getElementById("minutes").innerHTML = m < 10 ? '0' + m : m;   //als m<10 zetteen we 0m, anders gewoon m
    document.getElementById("seconds").innerHTML = s < 10 ? '0' + s : s;   //als s<10 zetteen we 0s, anders gewoon s
    //countdown finished
    if(verschil < 0){
        clearInterval(update);
        document.getElementById("days").innerHTML = "00 ";
        document.getElementById("hours").innerHTML = "00 ";
        document.getElementById("minutes").innerHTML = "00 ";
        document.getElementById("seconds").innerHTML = "00 ";
    }
    console.log(m)
},1000);
