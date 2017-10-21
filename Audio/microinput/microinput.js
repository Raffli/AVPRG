
navigator.mediaDevices.getUserMedia({ audio: true, video: false})
.then(function(stream) {
    var context = new AudioContext();
    var liveInput = context.createMediaStreamSource(stream);
    liveInput.connect(context.destination);
    var analyser = context.createAnalyser();

    analyser.fftSize = 2048;
    liveInput.connect(analyser);
    analyser.connect(context.destination);
    let array = new Uint8Array(analyser.frequencyBinCount);
    let actualData = analyser.getByteFrequencyData(array);

    function getAverageVolume(array) {
        var values = 0;

        for (var i = 0; i < array.length; i++)
            values += array[i];

        return values / array.length;
    }


    window.setInterval(function() {

        console.log(getAverageVolume(actualData)+"db")
    }, 1000);


});

