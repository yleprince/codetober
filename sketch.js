offset = 0
offset_y = 100000


var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){console.log("move your mouse");}, 2000);
}

var cols, rows;

function get_params(){
    return {
        "speed" : document.getElementById("speed").valueAsNumber,
        "nbDots" : document.getElementById("nbDots").valueAsNumber,
        "size" : document.getElementById("size").valueAsNumber,
        "rough" : document.getElementById("rough").valueAsNumber,
    }
}


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasForP5")

    zoff = 0.001
    params = get_params();

    scl = params["nbDots"]
    speed = params["speed"]
    weight = params["size"]
    rough = params["rough"]

    cols = floor(windowWidth / scl) + 1
    rows = floor(windowHeight / scl) + 1


}

function draw() {

    updated = get_params()

    if (scl !== updated["nbDots"] || speed !== updated["speed"] || weight !== updated["size"] || rough !== updated["rough"]){
        setup()
    }

    clear()
    yoff = 0
    for (var y = 0; y < rows; y++){
        xoff = 0
        for (var x = 0; x < cols; x++){
            const r = noise(yoff, xoff, zoff) * TWO_PI;
            xoff += rough
            const v = p5.Vector.fromAngle(r);
            push();
            translate(x*scl, y*scl);
            rotate(v.heading());
            stroke(0);
            strokeWeight(weight);
            line(0, 0, scl, 0);
            pop();
        }
        yoff += rough
    }
    zoff += speed
}