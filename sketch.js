var smallXBrushB
var smallYBrushB
var bigyBrushB
var bigxBrushB
var sizeX = 20
var sizeY = 20
var shapeCB
var shapeRB
var currentOpacity = 125;
var colorPicker;

function setup() {
  createCanvas(550, 550);


  colorPicker = createElement('input');
  colorPicker.attribute('type', 'color');

  background("white");

  smallXBrushB = createButton("smaller width brush")
  smallYBrushB = createButton("smaller height brush")
  bigyBrushB = createButton("bigger height brush")
  bigxBrushB = createButton("bigger width brush")
  shapeCB = createButton("ellipse")
  shapeRB = createButton("rectangle")


  smallXBrushB.position(150, 750)
  smallYBrushB.position(280, 750)
  bigyBrushB.position(150, 780)
  bigxBrushB.position(280, 780)
  shapeCB.position(230, 710)
  shapeRB.position(150, 710)


  smallXBrushB.mousePressed(smallX)
  smallYBrushB.mousePressed(smallY)
  bigxBrushB.mousePressed(bigX)
  bigyBrushB.mousePressed(bigY)

  shapeCB.mousePressed(shapec)
  shapeRB.mousePressed(shaper)

  currentOpacity = createSlider(0, 700, 200)


  currentOpacity.style('width', '100px');


}

function draw() {

  noStroke()

  if (mouseIsPressed) {
fill(red(colorPicker.value()),green(colorPicker.value()), blue(colorPicker.value()), currentOpacity.value())
   ellipse(mouseX, mouseY, sizeX, sizeY)
  }
}


function smallX() {
  sizeX = sizeX - 1
}

function smallY() {
  sizeY = sizeY - 1
}

function bigX() {
  sizeX = sizeX + 1
}

function bigY() {
  sizeY = sizeY + 1
}

function shapec() {
  if (mouseIsPressed) {
     fill(red(colorPicker.value()),green(colorPicker.value()), blue(colorPicker.value()), currentOpacity.value())
    ellipse(mouseX, mouseY, sizeX, sizeY)
   
  }
}

function shaper() {
  if (mouseIsPressed) {
     fill(red(colorPicker.value()),green(colorPicker.value()), blue(colorPicker.value()), currentOpacity.value())
    rect(mouseX, mouseY, sizeX, sizeY)
  }
}
