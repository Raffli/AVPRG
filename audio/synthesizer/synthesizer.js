var context = new AudioContext();
var buttons = document.getElementsByClassName("button");
var oscillators = [];
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("mousedown",function(e){
        startNode(i);
    })
    buttons[i].addEventListener("mouseup",function(e){
        stopNode(i);
    })
}


function startNode(i){
    var oscillator = context.createOscillator();
    oscillator.frequency.value = 440;

    oscillator.connect(context.destination);
    oscillator.start();
    oscillators[i] = oscillator;
}

function stopNode(i){
    oscillators[i].stop();
}


