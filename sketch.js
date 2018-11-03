

const IMAGE_WIDTH = 470;
const IMAGE_HEIGHT = 370;
const BASE_COLOR = "#06511E";
const BASE_COLOR2 = "#A05722";
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
  document.body.appendChild(h1);
  document.body.appendChild(h2);

  //Create the canvas for the drawing.
  createCanvas (IMAGE_WIDTH, IMAGE_HEIGHT);
  //Set background to grey.
  background (200);
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


  /* End the shape. */
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

  /* End the shape. */
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

  /* End the shape. */
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

  /* End the shape. */
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

  /* End the shape. */
  endShape();
}

function drawRightEye() {
  // Draws the right eye of the newt.
  drawRightEyeShadow();
  drawRightPupil();
  drawInnerPupil();
}

function drawBody() {
  //Draws the body of the Newt.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(BASE_COLOR);
  /* Begin the shape that will be created by the 12 vertices
  Using the following curves.*/
  beginShape();
  curveVertex(313, 292);
  curveVertex(313, 292);
  curveVertex(257, 270);
  curveVertex(181, 254);
  curveVertex(117, 195);
  curveVertex(114, 162);
  curveVertex(152, 127);
  curveVertex(170, 145);
  curveVertex(192, 160);
  curveVertex(216, 175);
  curveVertex(256, 199);
  curveVertex(290, 219);
  curveVertex(310, 222);
  curveVertex(310, 222);

  /* End the shape. */
  endShape();


}


function drawTail() {
  //Draws the tail of the Newt.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(BASE_COLOR);
  /* Begin the shape that will be created by the 18 vertices
  Using the following curves.*/
  beginShape();
  curveVertex(114, 162);
  curveVertex(114, 162);
  curveVertex(108, 132);
  curveVertex(113, 100);
  curveVertex(131, 74);
  curveVertex(146, 59);
  curveVertex(132, 52);
  curveVertex(115, 42);
  curveVertex(108, 24);
  curveVertex(116, 2);
  curveVertex(131, 0);
  curveVertex(145, 0);
  curveVertex(133, 11);
  curveVertex(162, 27);
  curveVertex(168, 39);
  curveVertex(176, 48);
  curveVertex(178, 62);
  curveVertex(171, 84);
  curveVertex(157, 103);
  curveVertex(160, 130);
  curveVertex(160, 130);

  /* End the shape. */
  endShape();


}



function drawLeftLeg() {
  //Draws the left leg of the Newt.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(BASE_COLOR);

  /* Begin the shape that will be created by the 7 vertices
  Using the following curves.*/
  beginShape();
  curveVertex(290,221);
  curveVertex(290,221);
  curveVertex(284, 192);
  curveVertex(293,178);
  curveVertex(304, 184);
  curveVertex(324, 208);
  curveVertex(335, 217);
  curveVertex(338, 226);
  curveVertex(338, 226);

  /* End the shape. */
  endShape();
}

function drawRightLeg() {
  //Draws the Right leg of the Newt.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(BASE_COLOR);

  /* Begin the shape that will be created by the 24 vertices
  Using the following curves.*/
  beginShape();
  curveVertex(258,269);
  curveVertex(258,269);
  curveVertex(266, 278);
  curveVertex(265, 290);
  curveVertex(245, 311);
  curveVertex(239, 321);
  curveVertex(244,336);
  curveVertex(273, 352);
  curveVertex(280, 358);
  curveVertex(293, 369);
  curveVertex(297, 359);
  curveVertex(302, 354);
  curveVertex(318, 354);
  curveVertex(319, 350);
  curveVertex(304, 340);
  curveVertex(315, 332);
  curveVertex(313, 326);
  curveVertex(298, 327);
  curveVertex(296, 323);
  curveVertex(289, 325);
  curveVertex(277, 320);
  curveVertex(277, 316);
  curveVertex(293, 299);
  curveVertex(301, 296);
  curveVertex(306, 295);
  curveVertex(314, 292);
  curveVertex(314, 292);

  /* End the shape. */
  endShape();
}

function drawLeftBackLeg() {
  //Draws the left back leg of the Newt.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(BASE_COLOR);

  /* Begin the shape that will be created by the 7 vertices
  Using the following curves.*/
  beginShape();
  curveVertex(179, 151);
  curveVertex(179, 151);
  curveVertex(210, 154);
  curveVertex(216, 166);
  curveVertex(213, 175);
  curveVertex(213, 175);

  /* End the shape. */
  endShape();
}

function drawRightBackLeg() {
  //Draws the Right Back leg of the Newt.

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape*/
  fill(BASE_COLOR);

  /* Begin the shape that will be created by the 28 vertices
  Using the following curves.*/
  beginShape();
  curveVertex(116, 161);
  curveVertex(116, 161);
  curveVertex(104, 169);
  curveVertex(90, 170);
  curveVertex(76, 180);
  curveVertex(65, 193);
  curveVertex(62, 202);
  curveVertex(61, 218);
  curveVertex(58, 222);
  curveVertex(55, 238);
  curveVertex(63, 240);
  curveVertex(62, 266);
  curveVertex(68, 270);
  curveVertex(68, 265);
  curveVertex(76, 255);
  curveVertex(82, 270);
  curveVertex(89, 273);
  curveVertex(91, 271);
  curveVertex(89, 267);
  curveVertex(89, 248);
  curveVertex(98, 254);
  curveVertex(108, 252);
  curveVertex(102, 243);
  curveVertex(99, 236);
  curveVertex(104, 232);
  curveVertex(97, 223);
  curveVertex(93, 213);
  curveVertex(97, 202);
  curveVertex(102, 197);
  curveVertex(120, 195);
  curveVertex(120, 195);
  /* End the shape. */
  endShape();
}

function face2ndColor(){
  //Add face Color
  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape with 2nd color*/
  fill(BASE_COLOR2);

  /* Begin the shape that will be created by the vertices
  Using the following curves.*/
  beginShape();
  curveVertex(416, 285);
  curveVertex(416, 285);
  curveVertex(407, 293);
  curveVertex(401, 293);
  curveVertex(386, 298);
  curveVertex(373, 301);
  curveVertex(356, 298);
  curveVertex(347, 300);
  curveVertex(335, 296);
  curveVertex(330, 297);
  curveVertex(331, 300);
  curveVertex(352, 308);
  curveVertex(373, 310);
  curveVertex(394, 305);
  curveVertex(403.5, 300);
  curveVertex(409, 295);
  curveVertex(414, 287);
  curveVertex(416, 287);
  curveVertex(416, 287);

  /* End the shape. */
  endShape();
}

function face2ndColor(){
  //Add face Color
  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape with 2nd color*/
  fill(BASE_COLOR2);

  /* Begin the shape that will be created by the vertices
  Using the following curves.*/
  beginShape();
  curveVertex(416, 285);
  curveVertex(416, 285);
  curveVertex(407, 293);
  curveVertex(401, 293);
  curveVertex(386, 298);
  curveVertex(373, 301);
  curveVertex(356, 298);
  curveVertex(347, 300);
  curveVertex(335, 296);
  curveVertex(330, 297);
  curveVertex(331, 300);
  curveVertex(352, 308);
  curveVertex(373, 310);
  curveVertex(394, 305.5);
  curveVertex(403.5, 300);
  curveVertex(409, 295);
  curveVertex(414, 287);
  curveVertex(416, 287);
  curveVertex(416, 287);

  /* End the shape. */
  endShape();
}

function leftLeg2ndColor(){
  //Add left leg Color

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape with 2nd color*/
  fill(BASE_COLOR2);

  /* Begin the shape that will be created by the vertices
  Using the following curves.*/
  beginShape();
  curveVertex(310, 222);
  curveVertex(310, 222);
  curveVertex(305, 197);
  curveVertex(316, 206);
  curveVertex(323, 224);
  curveVertex(323, 224);

  /* End the shape. */
  endShape();
}

function rightLeg2ndColor(){
  //Add right leg Color

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape with 2nd color*/
  fill(BASE_COLOR2);

  /* Begin the shape that will be created by the vertices
  Using the following curves.*/
  beginShape();
  curveVertex(301, 296);
  curveVertex(301, 296);
  curveVertex(306, 295);
  curveVertex(314, 292);
  curveVertex(304, 284);
  curveVertex(305, 265);
  curveVertex(291, 272);
  curveVertex(292, 299);
  curveVertex(292, 299);

  /* End the shape. */
  endShape();

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape with 2nd color*/
  fill(BASE_COLOR2);

  /* Begin the shape that will be created by the vertices
  Using the following curves.*/
  beginShape();
  curveVertex(304, 340);
  curveVertex(304, 340);
  curveVertex(315, 332);
  curveVertex(313, 326);
  curveVertex(298, 327);
  curveVertex(296, 323);
  curveVertex(287, 325);
  curveVertex(296, 335);
  curveVertex(295, 344);
  curveVertex(295, 344);
  /* End the shape. */
  endShape();
}

function rightBackLeg2ndColor(){
  //Add right back leg Color

  /* Cancel the default black border around
  the shape created by vertex. */
  noStroke();

  /*Color shape with 2nd color*/
  fill(BASE_COLOR2);

  /* Begin the shape that will be created by the vertices
  Using the following curves.*/
  beginShape();
  curveVertex(89, 248);
  curveVertex(89, 248);
  curveVertex(98, 254);
  curveVertex(108, 252);
  curveVertex(102, 243);
  curveVertex(99, 236);
  curveVertex(104, 232);
  curveVertex(97, 223);
  curveVertex(93, 213);
  curveVertex(97, 202);
  curveVertex(102, 197);
  curveVertex(120, 195);
  curveVertex(109, 187);
  curveVertex(105, 190);
  curveVertex(94, 190);
  curveVertex(95, 202);
  curveVertex(89, 204);
  curveVertex(87, 223);
  curveVertex(94, 229);
  curveVertex(95, 237);
  curveVertex(89, 248);
  curveVertex(89, 248);
  curveVertex();
  /* End the shape. */
  endShape();
}

function add2ndColor(){
  face2ndColor();
  leftLeg2ndColor();
  rightLeg2ndColor();
  rightBackLeg2ndColor();
}

function drawBodyLine(){
//Now draw the body shadow line
//Sets no fill color
noFill();

//Sets stroke color to be black
stroke(0);

//Begin drawing the curved line using the following vertices
beginShape();
curveVertex(120, 0);
curveVertex(120, 0);
curveVertex(118, 5);
curveVertex(134, 13);
curveVertex(166, 32);
curveVertex(145, 59);
curveVertex(135, 71);
curveVertex(126, 90);
curveVertex(122, 112);
curveVertex(126, 141);
curveVertex(144, 183);
curveVertex(172, 215);
curveVertex(211, 240);
curveVertex(225, 246);
curveVertex(232, 253);
curveVertex(253, 259);
curveVertex(263, 264);
curveVertex(274, 273);
curveVertex(280, 284);
curveVertex(263, 293);
curveVertex(263, 293);
//End the line.

endShape();
}


function draw(){
  //Draw the all the body parts.
     drawHead();
     drawLeftEye();
     drawRightEye();
     drawBody();
     drawTail();
     drawLeftLeg();
     drawLeftBackLeg();
     drawRightLeg();
     drawRightBackLeg();

     //Add the second color.
     add2ndColor();

     //Add shadow line.
     drawBodyLine();
}
