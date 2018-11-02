const IMAGE_WIDTH = 470;
const IMAGE_HEIGHT = 370;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  fill('rgba(100%,0%,100%,0.5)');
  ellipse(300,189,25)
  stroke(198,157,101);
  strokeWeight(1);
  beginShape()
  stroke('#15,#33,#37');
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
  line(380,222,370,241);
  line(380,222,320,224);
  line(370,241,288,256);
  line(288,256,139,249);
  line(155,235,14,312);
  line(14,312,12,308);
  line(12,308,114,235);
  point(102,246);
  line(102,246,5,235);
  point(188,163);
  stroke('rgb(255,0,0)');
  line(188,163,186,163);
  line(186,163,180,201);
  point(176,166,);
  line(176,166,174,166);
  line(174,166,169,203);
  point(164,173);
  line(164,173,161,173);
  line(161,173,162,204);
  point(468,320);
  stroke('rgb(255,255,255)');
  strokeWeight(3);

  line(468,320,422,299);
  line(422,299,392,293);
  point(427,339);
  stroke('rgb(255,255,255)');
  line(427,339,290,338);
  line(468,320,427,339);
  line(392,293,332,275);
  line(332,275,291,288);
  line(291,288,241,265);
  line(290,338,227,321);
  line(227,321,205,330);
  line(205,330,92,351);
  line(92,351,34,338);
  point(158,274);
  stroke('rgb(255,255,255)');
  line(158,274,122,292);
  line(122,292,83,280);
  endshape()





}
