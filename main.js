objects = [];
status = "";
input_value = "";

function setup() {
    canvas = createCanvas(380, 380);
    canvas.position(770, 380);
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_value = document.getElementById("object_name").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 380, 380);
}
