const IMAGE_WIDTH = 470;
const IMAGE_HEIGHT = 370;
const EYE_COLOR = ('#15,#33,#37');
const EYE_DIAMETER = 22

function setup() {
  createCanvas(IMAGE_WIDTH,IMAGE_HEIGHT);
  background(200);
}


function draw() {

  ellipse(300,189,25)


  beginShape()

  point(420,177);
  line(420,177,357,149);
  line(357,149,296,126);
  line(296,126,231,112);
  line(231,112,159,108);
  line(159,108,148,105);
  point(148,105);
  line(148,105,85,48);
  point(85,48);
  line(85,48,72,100);
  line(72,100,55,128);
  point(55,128);
  line(55,128,5,140);
  line(420,177,430,190);
  line(430,190,424,205);
  line(424,205,380,222);




}
