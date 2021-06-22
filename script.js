// Author:

// Global UI Variables
//let canvasDiv;

// Global ML Variables
let mobilenet;

let video;

let isModelReady;
//let mobilenet;

function setup() {
  canvasDiv = createDiv();

  canvas = createCanvas(640, 480);

  canvas.parent(canvasDiv);

  textDiv = createDiv();

  textP = createP("Model loading, please wait...");

  textP.parent(textDiv);

  video = createCapture(VIDEO);

  video.style("display", "none");

  


}

function draw() {
  image(video, 0, 0);

  if(isModelReady) {

  mobilenet.classify(canvas, gotResults);

    }
}

function modelReady() {
  isModelReady = true;
}

function gotResults(error, results) {

}
