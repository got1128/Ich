function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    if (frameCount % 30 == 0) { // 每 30 幀閃爍一次
        background(255);
    } else {
        background(0);
    }
}
