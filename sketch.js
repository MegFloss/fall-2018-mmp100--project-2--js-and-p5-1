'use strict';

const IMAGE_WIDTH = 470;
const IMAGE_HEIGHT = 370;
const HEAD_COLOR = "#06511E";

function setup() {
  createCanvas (IMAGE_WIDTH, IMAGE_HEIGHT);
  /*background (200);*/
  noFill();
    // Setup code goes here. This function runs once.
}

function drawHead() {
  // Creates the head of the newt.
  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color head*/
  fill(HEAD_COLOR);
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
     drawHead();
}
