var context = new AudioContext();
var sound = new Audio("sounds/sound.wav");
var source = context.createMediaElementSource(sound);
var distortion = context.createWaveShaper();
var distortionslider = document.getElementById("distortionslider")

source.connect(distortion);
distortion.connect(context.destination);
sound.loop = true;

distortion.curve = makeDistortionCurve(0);
distortion.oversample = "4x";

distortionslider.addEventListener("change", function(e){
    distortion.curve = makeDistortionCurve(distortionslider.value);
})

playButton.addEventListener("click", function(e){
    sound.play();
})

function makeDistortionCurve(amount) {
    var n_samples = 44100,
        curve = new Float32Array(n_samples);

    for (var i = 0; i < n_samples; ++i ) {
        var x = i * 2 / n_samples - 1;
        curve[i] = (Math.PI + amount) * x / (Math.PI + (amount * Math.abs(x)));
    }

    return curve;
};

