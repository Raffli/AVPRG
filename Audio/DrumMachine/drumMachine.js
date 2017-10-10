var context = new AudioContext();
var audio = [];
audio[0] = new Audio("sound1.wav");
audio[1] = new Audio("sound2.wav");
audio[2] = new Audio("sound3.wav");
audio[3] = new Audio("sound4.wav");

var source =[]
source[0] = context.createMediaElementSource(audio[0]);
source[1] = context.createMediaElementSource(audio[1]);
source[2] = context.createMediaElementSource(audio[2]);
source[3] = context.createMediaElementSource(audio[3]);

source[0].connect(context.destination);
source[1].connect(context.destination);
source[2].connect(context.destination);
source[3].connect(context.destination);

//audio[0].play();

var request = new XMLHttpRequest();
request.open('GET',  "sound1.wav", true);
request.responseType = 'arraybuffer';
request.onload = function () {
var undecodedAudio = request.response;
context.decodeAudioData(undecodedAudio, function (buffer) {
var sourceBuffer = context.createBufferSource();
sourceBuffer.buffer = buffer;
sourceBuffer.connect(context.destination);
sourceBuffer.start(context.currentTime);
});
};
request.send();
