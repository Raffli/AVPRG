var playButton = document.getElementById("playButton");
var tresholdslider = document.getElementById("treshholdslider");
var ratioslider = document.getElementById("ratioslider");
var kneeslider = document.getElementById("kneeslider");
var attackslider = document.getElementById("attackslider");
var releaseslider = document.getElementById("releaseslider");

var context = new AudioContext();
var compressor = context.createDynamicsCompressor();
var sound = new Audio("sounds/sound.wav");
var source = context.createMediaElementSource(sound);


source.connect(compressor);
compressor.connect(context.destination);


tresholdslider.addEventListener("input",function(e){
    var tresh = this.value;
    compressor.threshold.value = tresh;
})

ratioslider.addEventListener("input",function(e){
    var ratio = this.value;
    compressor.ratio.value = ratio ;
})

kneeslider.addEventListener("input",function(e){
    var knee = this.value;
    compressor.knee.value = knee;

})

attackslider.addEventListener("input",function(e){
    var attack = this.value;
    compressor.attack.value = attack;

})

releaseslider.addEventListener("input",function(e){
    var release = this.value;
    compressor.release.value = release;

})

compressor.release.value = 0.55;
playButton.addEventListener("click", function(e){
    sound.play();
})



