var context = new AudioContext();
var oscillator = context.createOscillator();
var gain = context.createGain();



document.addEventListener("mousedown", function(e){
    console.log(e.pageX,e.pageY);
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    oscillatorNode.frequency.value = 880;
    gain.gain.value = 0;

    oscillator.connect(gain);

    oscillator.connect(context.destination);
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 1);
})
