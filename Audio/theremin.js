var context = new AudioContext();
var oscillator = context.createOscillator();
var gain = context.createGain();

var width = window.innerWidth
var height = window.innerHeight
var maxFrequenz = 2400;
var maxVolume = 0.01;

oscillator.frequency.value = 880;
gain.gain.value = maxVolume;

oscillator.connect(gain);
oscillator.connect(context.destination);
oscillator.start(context.currentTime);

document.addEventListener("mousemove", function(e){
    //console.log(e.pageX,e.pageY);
    //console.log(window.innerWidth);
    //console.log(window.innerHeight);
    console.log((e.clientX/width) * maxFrequenz);
    console.log((e.clientY /height) * maxVolume);
    oscillator.frequency.value = (e.clientX/width) * maxFrequenz;
    gain.gain.value = (e.clientY /height) * maxVolume;
})


