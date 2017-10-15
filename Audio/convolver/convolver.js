var context = new AudioContext();
var sound = new Audio("sounds/sound.wav");
var source = context.createMediaElementSource(sound);
var convolver = context.createConvolver();
var playButton = document.getElementById("convPlayButton");
var dropButton = document.getElementById("dropDownButton");
var caveButton = document.getElementById("cave");
var curchButton = document.getElementById("church");
var garageButton = document.getElementById("garage");
var roomButton = document.getElementById("room");


dropButton.addEventListener("click", function(e){
    document.getElementById("myDropdown").classList.toggle("show");
})

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

source.connect(convolver);
convolver.connect(context.destination);

playButton.addEventListener("click", function(e){
    sound.play();
})

caveButton.addEventListener("click", function(e){
    selectReverb("cave");
})

curchButton.addEventListener("click", function(e){
    selectReverb("church");
})
roomButton.addEventListener("click", function(e){
    selectReverb("room");
})
garageButton.addEventListener("click", function(e){
    selectReverb("garage");
})

function selectReverb(reverb){
    var request = new XMLHttpRequest();
    request.open("GET",  "impulseResponses/"+reverb+".wav", true);
    request.responseType = "arraybuffer";

    request.onload = function () {
         var undecodedAudio = request.response;
         context.decodeAudioData(undecodedAudio, function (buffer) {
              convolver.buffer = buffer;
              convolver.normalize = true;
         });
    };

    request.send();
}

selectReverb("cave");
