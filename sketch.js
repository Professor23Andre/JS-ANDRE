function setup() {
  createCanvas(700, 700);
  background("yellow");
}

function draw() {

  stroke("blue");
  fill("red");

  //console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 10, 10);
  }
}
