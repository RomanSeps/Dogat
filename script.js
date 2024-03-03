let obojkyVisible = false;
let voditkaVisible = false;
let krmivoVisible = false;
let hrackyVisible = false;
let cistotaVisible = false;
let obleceniVisible = false;
let pelechyVisible = false;
let vycvikVisible = false;


var btn0 = document.getElementById('b0')
var btn1 = document.getElementById('b1')
var btn2 = document.getElementById('b2')
var btn3 = document.getElementById('b3')

var btn4 = document.getElementById('b4')
var btn5 = document.getElementById('b5')
var btn6 = document.getElementById('b6')
var btn7 = document.getElementById('b7')

function demo0(){
    var Obojky = document.querySelectorAll('#obojek')
    var Pelechy = document.querySelectorAll('#pelech')
    var Voditka = document.querySelectorAll('#voditko')

    if(!obojkyVisible){

        Obojky.forEach(function(obojek) {
            obojek.style.display = 'initial';
        });

        Pelechy.forEach(function(pelech) {
            pelech.style.display = 'none';
        });

        Voditka.forEach(function(voditko) {
            voditko.style.display = 'none';
        });
        obojkyVisible = true;
        btn0.style.backgroundColor = 'gray';

    }else{
        Obojky.forEach(function(obojek) {
            obojek.style.display = 'initial';
        });

        Pelechy.forEach(function(pelech) {
            pelech.style.display = 'initial';
        });

        Voditka.forEach(function(voditko) {
            voditko.style.display = 'initial';
        });
        
        obojkyVisible = false;
        btn0.style.backgroundColor = 'rgb(255, 109, 109)';
    }
}

function demo1(){
    var Obojky = document.querySelectorAll('#obojek')
    var Pelechy = document.querySelectorAll('#pelech')
    var Voditka = document.querySelectorAll('#voditko')

    if(!voditkaVisible){

        Voditka.forEach(function(obojek) {
            obojek.style.display = 'initial';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'none';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'none';
        });
        voditkaVisible = true;
        btn1.style.backgroundColor = 'gray';

    }else{
        Voditka.forEach(function(obojek) {
            obojek.style.display = 'initial'
        });
        Obojky.forEach(function(pelech) {
            pelech.style.display = 'initial';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'initial';
        });
        
        voditkaVisible = false;
        btn1.style.backgroundColor = 'rgb(255, 109, 109)';
    }
}

function demo2(){
    var Obojky = document.querySelectorAll('#obojek')
    var Pelechy = document.querySelectorAll('#pelech')
    var Voditka = document.querySelectorAll('#voditko')
    

    if(!krmivoVisible){

        Voditka.forEach(function(obojek) {
            obojek.style.display = 'none';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'none';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'none';
        });
        krmivoVisible = true;
        btn2.style.backgroundColor = 'gray';

    }else{
        Voditka.forEach(function(obojek) {
            obojek.style.display = 'initial'
        });
        Obojky.forEach(function(pelech) {
            pelech.style.display = 'initial';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'initial';
        });
        
        krmivoVisible = false;
        btn2.style.backgroundColor = 'rgb(255, 109, 109)';
    }
}

function demo3(){
    var Obojky = document.querySelectorAll('#obojek')
    var Pelechy = document.querySelectorAll('#pelech')
    var Voditka = document.querySelectorAll('#voditko')
    

    if(!hrackyVisible){

        Voditka.forEach(function(obojek) {
            obojek.style.display = 'none';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'none';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'none';
        });
        hrackyVisible = true;
        btn3.style.backgroundColor = 'gray';

    }else{
        Voditka.forEach(function(obojek) {
            obojek.style.display = 'initial'
        });
        Obojky.forEach(function(pelech) {
            pelech.style.display = 'initial';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'initial';
        });
        
        hrackyVisible = false;
        btn3.style.backgroundColor = 'rgb(255, 109, 109)';
    }
}

function demo4(){
    var Obojky = document.querySelectorAll('#obojek')
    var Pelechy = document.querySelectorAll('#pelech')
    var Voditka = document.querySelectorAll('#voditko')
    

    if(!cistotaVisible){

        Voditka.forEach(function(obojek) {
            obojek.style.display = 'none';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'none';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'none';
        });
        cistotaVisible = true;
        btn4.style.backgroundColor = 'gray';

    }else{
        Voditka.forEach(function(obojek) {
            obojek.style.display = 'initial'
        });
        Obojky.forEach(function(pelech) {
            pelech.style.display = 'initial';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'initial';
        });
        
        cistotaVisible = false;
        btn4.style.backgroundColor = 'rgb(255, 109, 109)';
    }
}

function demo5(){
    var Obojky = document.querySelectorAll('#obojek')
    var Pelechy = document.querySelectorAll('#pelech')
    var Voditka = document.querySelectorAll('#voditko')
    

    if(!obleceniVisible){

        Voditka.forEach(function(obojek) {
            obojek.style.display = 'none';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'none';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'none';
        });
        obleceniVisible = true;
        btn5.style.backgroundColor = 'gray';

    }else{
        Voditka.forEach(function(obojek) {
            obojek.style.display = 'initial'
        });
        Obojky.forEach(function(pelech) {
            pelech.style.display = 'initial';
        });

        Pelechy.forEach(function(voditko) {
            voditko.style.display = 'initial';
        });
        
        obleceniVisible = false;
        btn5.style.backgroundColor = 'rgb(255, 109, 109)';
    }
}

function demo6(){
    var Obojky = document.querySelectorAll('#obojek')
    var Pelechy = document.querySelectorAll('#pelech')
    var Voditka = document.querySelectorAll('#voditko')

    if(!pelechyVisible){

        Pelechy.forEach(function(obojek) {
            obojek.style.display = 'initial';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'none';
        });

        Voditka.forEach(function(voditko) {
            voditko.style.display = 'none';
        });
        pelechyVisible = true;
        btn6.style.backgroundColor = 'gray';

    }else{
        Pelechy.forEach(function(obojek) {
            obojek.style.display = 'initial';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'initial';
        });

        Voditka.forEach(function(voditko) {
            voditko.style.display = 'initial';
        });
        
        pelechyVisible = false;
        btn6.style.backgroundColor = 'rgb(255, 109, 109)';
    }
}

function demo7(){
    var Obojky = document.querySelectorAll('#obojek')
    var Pelechy = document.querySelectorAll('#pelech')
    var Voditka = document.querySelectorAll('#voditko')

    if(!vycvikVisible){

        Pelechy.forEach(function(obojek) {
            obojek.style.display = 'none';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'none';
        });

        Voditka.forEach(function(voditko) {
            voditko.style.display = 'none';
        });
        vycvikVisible = true;
        btn7.style.backgroundColor = 'gray';

    }else{
        Pelechy.forEach(function(obojek) {
            obojek.style.display = 'initial';
        });

        Obojky.forEach(function(pelech) {
            pelech.style.display = 'initial';
        });

        Voditka.forEach(function(voditko) {
            voditko.style.display = 'initial';
        });
        
        vycvikVisible = false;
        btn7.style.backgroundColor = 'rgb(255, 109, 109)';
    }
}
