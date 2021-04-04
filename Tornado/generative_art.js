function setup() {
  createCanvas(800, 600, WEBGL);

}

function draw() {
  background(0);


  for (var x = 0; x < width; x = x + 35) {
    for (var y = 0; y < height; y = y + 35) {
    fill ('red')
      ellipse(x - 390, y - 390, 10, 10)
      rotateZ(frameCount * 0.0001);
      rotateX(frameCount * 0.0001);
      rotateY(frameCount * 0.0001);

      ellipse(x - 390, y - 390, 10, 10)

      ellipse(x - 390, y - 390, 10, 10)
    }
  }
}

