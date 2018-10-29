

const IMAGE_WIDTH = 470;
const IMAGE_HEIGHT = 370;
const BASE_COLOR = "#06511E";
const PUPIL_COLOR = "#2A1A14";
const INNER_PUPIL_COLOR = "#565455";
const SHADOW_COLOR = "#433532";

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

function drawLeftEye() {
  // Creates the left eye of the newt.
  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(BASE_COLOR);
  /* Begin the shape that will be created by the four vertices
  Using the following curves.*/
  beginShape();
  curveVertex(382, 237);
  curveVertex(382, 237);
  curveVertex(388, 238);
  curveVertex(398, 246);
  curveVertex(400, 256);
  curveVertex(400, 256);

  /* End the shape, which is required to complete the shape by the three vertices. */
  endShape();
}

function drawRightEyeShadow() {
  //Draws right eye shadow.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color head*/
  fill(SHADOW_COLOR);
  /* Begin the shape that will be created by the 11 vertices
  Using the following curves.*/
  beginShape();
  curveVertex(372, 278);
  curveVertex(372, 278);
  curveVertex(383, 274);
  curveVertex(392, 278);
  curveVertex(394, 283);
  curveVertex(389, 294);
  curveVertex(377, 297);
  curveVertex(367, 290);
  curveVertex(366, 282);
  curveVertex(380, 288);
  curveVertex(385, 282);
  curveVertex(372, 278);
  curveVertex(372, 278);

  /* End the shape, which is required to complete the shape by the three vertices. */
  endShape();
}

function drawRightPupil() {
  // Creates the right pupil of the newt.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(PUPIL_COLOR);
  // Begin the shape that will be created by the ellipse function
  beginShape();
  ellipse(383, 293, 9);

  /* End the shape, which is required to complete the shape by the three vertices. */
  endShape();
}

function drawInnerPupil() {
  // Creates the right inner pupil of the newt.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(INNER_PUPIL_COLOR);
  // Begin the shape that will be created by the ellipse function
  beginShape();
  ellipse(384, 295, 4);

  /* End the shape, which is required to complete the shape by the three vertices. */
  endShape();
}

function drawRightEye() {
  // Creates the right eye of the newt.
  drawRightEyeShadow();
  drawRightPupil();
  drawInnerPupil();
}

function draw(){
  //Draw the Newt's head.
     drawHead();
     drawLeftEye();
     drawRightEye();

}
