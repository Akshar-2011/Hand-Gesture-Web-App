prediction = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ezyouCCaa/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function speak(){
    var synth = Window.speechSynthesis;
    var speak_1 = "The first prediction is "+prediction_1;
    var speak_2 = "And the second prediction is "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_1  + speak_2);
    synth.speak(utterThis);
}