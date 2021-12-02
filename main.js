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
    speak_data = speak_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function check(){
    image = document.getElementById('captured_image');
    classifier.classify(image, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction = results[0].label;
        console.log("Working")
        speak_1 = "";
        if(results[0].label == "Amazing"){
            speak_1 = "Amazing";
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "Best"){
            speak_1 = "Best";
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "Victory"){
            speak_1 = "Victory";
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        speak();
    }
}