var playButton = document.getElementById("playButton");
var gainslider = document.getElementById("gainslider");
var panningslider = document.getElementById("panningslider");
var delayslider = document.getElementById("delayslider");

var context = new AudioContext();
var stereoNode = context.createStereoPanner();
var sound = new Audio("sounds/sound.wav");
var source = context.createMediaElementSource(sound);
var gainNode = context.createGain();
var delayNode = context.createDelay(4.0);

source.connect(gainNode);
gainNode.connect(delayNode);
delayNode.connect(stereoNode);
stereoNode.connect(context.destination);

gainslider.addEventListener("input",function(e){
    var gainValue = this.value;
    gainNode.gain.value = gainValue;
})

panningslider.addEventListener("input",function(e){
    var panningValue = this.value;
    stereoNode.pan.value = panningValue;
})

delayslider.addEventListener("input",function(e){
    var delayValue = this.value;
    delayNode.delayTime.value = delayValue;
})


playButton.addEventListener("click", function(e){
    sound.play();
})











playButton.addEventListener("mousedown", function(e){
    //audio.play();
});
