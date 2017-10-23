var bar = document.getElementById("micBar");
var text = document.getElementById("micText");

navigator.mediaDevices.getUserMedia({ audio: true, video: false})
.then(function(stream) {
    var context = new AudioContext();
    var liveInput = context.createMediaStreamSource(stream);
    var analyser = context.createAnalyser();

    analyser.fftSize = 2048;
    liveInput.connect(analyser);
    analyser.connect(context.destination);


    function getAverageVolume(array) {
        var values = 0;

        for (var i = 0; i < array.length; i++)
            values += array[i];

        return values / array.length;
    }


    window.setInterval(function() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        text.textContent = getAverageVolume(array) + " db";
        bar.style.width = ((getAverageVolume(array) / 150) * 100)+'%';
    }, 100);


});

