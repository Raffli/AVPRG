var context = new AudioContext();
var oscillator = context.createOscillator();
var gain = context.createGain();

var width = window.innerWidth
var height = window.innerHeight
var maxFrequenz = 2400;

oscillator.frequency.value = 880;
gain.gain.value = 0.01;

oscillator.connect(gain);
gain.connect(context.destination);
oscillator.start(context.currentTime);

document.addEventListener("mousemove", function(e){
    oscillator.frequency.value = (e.clientX/width) * maxFrequenz;
    gain.gain.value = (e.clientY /height);
})


