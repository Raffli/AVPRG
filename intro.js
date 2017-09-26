/* Variablen*/
var a = 1;
var b = 2;

a = b;
console.log(a);
console.log(b);

//Operatoren

var foo = 2;
var bar = "2";

var result = (foo == bar);
console.log(result);

function meineErsteFunktion(){
    console.log("Ich bin eine Funktion");
}

meineErsteFunktion();

var myButton = document.getElementById("myButton");

myButton.addEventListener('mousedown', function(e){
    console.log("buttonpressed");
})
