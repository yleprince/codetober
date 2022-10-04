width = window.innerWidth
height = window.innerHeight

offset = 0
offset_y = 100000

var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){console.log("move your mouse");}, 2000);
}




function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasForP5")

    speed = document.getElementById("speed").valueAsNumber
    nbDots = document.getElementById("nbDots").valueAsNumber
    size = document.getElementById("size").valueAsNumber
    seeds = Array.from({length: nbDots}, () => ({x:Math.random(), y:Math.random(), z: offset_y * Math.random()}));

    noStroke();
    fill(73, 90);
}

function draw() {
    // background(201, 10)
    if (speed !== document.getElementById("speed").valueAsNumber ||
    size !== document.getElementById("size").valueAsNumber ||
    nbDots !== document.getElementById("nbDots").valueAsNumber){
        setup()
    }

    offset += speed
    offset_y += speed
    seeds.map(s => ellipse(windowWidth*(s.x + noise(s.z + offset))/2, windowHeight*(s.y + noise(s.z+offset_y))/2, size, size))

}