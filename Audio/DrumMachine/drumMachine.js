var context = new AudioContext();
var soundArray = [];
var mediaSourceArray = [];
var drumpads = document.getElementsByClassName("drumpad");


for (let i = 0; i < drumpads.length; i++){
    soundArray[(i)] = new Audio("sounds/sound"+ (i+1) +".wav");
    mediaSourceArray[(i)] = context.createMediaElementSource(soundArray[(i)]);
    mediaSourceArray[(i)].connect(context.destination);

    document.getElementById("div"+(i+1)).addEventListener("mousedown",
    function(e){playSound(i);});
}

function playSound(number){
    console.log(number + "test");
    soundArray[number].play();
}


