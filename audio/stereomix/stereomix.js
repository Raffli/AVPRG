var context = new AudioContext();
var audio = new Audio("sounds/stereoSound.wav");
var source = context.createMediaElementSource(audio);
var splitter = context.createChannelSplitter(2);
var merger = context.createChannelMerger(2);
var gainLeft = context.createGain();
var gainRight = context.createGain();
var stereoSwitch = false;

var slider = document.getElementById("gainSlider");
var playButton = document.getElementById("playButton");
var switchButton = document.getElementById("switchButton");

gainLeft.gain.value = 0.8;
gainRight.gain.value = 0.8;

source.connect(splitter);
splitter.connect(gainLeft, 0);
splitter.connect(gainRight, 1);
gainLeft.connect(merger, 0, 0);
gainRight.connect(merger, 0, 1);
merger.connect(context.destination);

playButton.addEventListener("click", function(e){
    audio.play();
})

switchButton.addEventListener("click", function(e){
    gainLeft.disconnect;
    gainRight.disconnect;
    if (stereoSwitch){
        stereoSwitch = false;
        gainLeft.connect(merger, 0, 0);
        gainRight.connect(merger, 0, 1);
    }else{
        stereoSwitch = true;
        gainLeft.connect(merger, 0, 1);
        gainRight.connect(merger, 0, 0);
    }
})

slider.addEventListener("input",function(e){
    gainLeft.gain.value = (100-this.value)/100;
    gainRight.gain.value = (this.value/100)+1;
})
