var playButton = document.getElementById("playButton");
var frequenzyslider = document.getElementById("frequenzyslider");
var detuneslider = document.getElementById("detuneslider");
var qslider = document.getElementById("qslider");
var gainslider = document.getElementById("gainslider");
var typeChooser = document.getElementById("filterType")

var context = new AudioContext();
var sound = new Audio("sounds/sound.wav");
var source = context.createMediaElementSource(sound);
var filter = context.createBiquadFilter();
var gainNode = context.createGain();


source.connect(gainNode);
gainNode.connect(filter);
filter.connect(context.destination);

typeChooser.addEventListener("change", function(e){
    filter.type = typeChooser.value;
})

frequenzyslider.addEventListener("input",function(e){
    var freq = this.value;
    filter.frequency.value = freq;
})

detuneslider.addEventListener("input",function(e){
    var det = this.value;
    filter.detune.value = det;
})

qslider.addEventListener("input",function(e){
    var q = this.value;
    filter.Q.value = q;
})

gainslider.addEventListener("input",function(e){
    var gain = this.value;
    filter.gain.value = gain;
})


playButton.addEventListener("click", function(e){
    sound.play();
})



