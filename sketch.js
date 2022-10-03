
function setup() {
    width = window.innerWidth
    height = window.innerHeight

    offset = 0
    offset_y = 100000

    seeds = Array.from({length: 50}, () => ({x:Math.random(), y:Math.random(), z: offset_y * Math.random()}));

    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasForP5")

    noStroke();
    fill(73, 90);
}

function draw() {
    background(201, 10)
    
    offset += 0.005
    offset_y += 0.005
    seeds.map(s => ellipse(windowWidth*(s.x + noise(s.z + offset))/2, windowHeight*(s.y + noise(s.z+offset_y))/2, 10, 10))
}