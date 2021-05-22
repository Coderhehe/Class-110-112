Webcam.set({
    width:300,
    height:300,
image_format:'png',
png_quality:90,

constraints:
{
facingMode:"environment"
}
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take() {
    Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML="<img id='ci' src="+data_uri+">"
    });
}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}
function check(params) {
    img=document.getElementById("ci");
    classifier.classify(img,gotResult);
}
function gotResult(error,result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("results").innerHTML=result[0].label;
    }
}