

const IMAGE_WIDTH = 470;
const IMAGE_HEIGHT = 370;
const BASE_COLOR = "#06511E";

function setup() {
  // Setup code goes here. This function runs once.

  //Create a reference to the body element.
  let body = document.getElementsByTagName(`body`)[0];

  // Create h1 and h2 elements
  let h1 = document.createElement(`h1`);
  let h2 = document.createElement(`h2`);

  // Create text nodes for the animal and my name.
  let animal = document.createTextNode(`Newt`);
  let name = document.createTextNode(`Victor Nekhlyudov`);

  //Add the h1 and h2 elements to the body.
  h1.appendChild(animal);
  h2.appendChild(name);
  body.appendChild(h1);
  body.appendChild(h2);

  //Create the canvas for the drawing.
  createCanvas (IMAGE_WIDTH, IMAGE_HEIGHT);
  /*background (200);*/
  noFill();
}

function drawHead() {
  // Creates the head of the newt.
  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color head*/
  fill(BASE_COLOR);
  /* Begin the shape that will be created by the five vertices
  Using the following curves.*/
  beginShape();
  curveVertex(313, 292);
  curveVertex(313, 292);
  curveVertex(373, 310);
  curveVertex(416, 285);
  curveVertex(382, 237);
  curveVertex(310, 222);
  curveVertex(310, 222);


  /* End the shape, which is required to complete the shape by the three vertices. */
  endShape();
}

function draw(){
  //Draw the Newt's head.
     drawHead();
     
}
