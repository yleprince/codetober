function setup() {
    var canvas = createCanvas(600, 400);
    canvas.parent('canvasForP5');
}

function draw() {
    if (mouseIsPressed){
        console.log("click")
        noStroke();

        fill(93, 93, 93, 80);
        ellipse(mouseX, mouseY, 20, 20);
    } 
    
}