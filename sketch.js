let shapes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('black');

  for(let shape of shapes) {
    push();
    noStroke();
    fill(shape.color)
    shape.y += 1;
    if(shape.shapeType === 'sqaure') {
      rect(shape.x, shape.y, 100, 100);
    }
    if(shape.shapeType === 'ellipse') {
      ellipse(shape.x, shape.y, 150, 50);
    }
    if(shape.shapeType === 'arc') {
      arc(shape.x, shape.y, 100, 100, 0, PI + QUARTER_PI);
    }
  }
}

function keyPressed() {
  if (keyCode === SHIFT) {
    let last = shapes.pop();
  } 
}

function mousePressed() {
  addAShape();
}

function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    color: random(['red','yellow', 'orange', 'green', 'blue', 'purple']),
    shapeType: random(['sqaure', 'ellipse', 'arc'])
  }
  shapes.push(shape1);
}