
const windowWidth = 1050;
const windowHeight = 1050;
function setup(){
createCanvas(windowWidth, windowHeight);
background(129,129,129);
}


function draw(){
  curve(526,311,430,312,475,306,456,346);
  curve(456,356,442,385,443,385,393,456);
  curve(393,456,372,485,375,485,349,471);
  curve(346,471,347,455,349,455,345,468);
  curve(345,468,307,470,309,470,299,434);
  curve(299,434,287,399,288,399,348,341);
  curve(348,341,368,324,365,324,389,367);
  bezier(389,367,423,390,281,332,303,311);
  bezier(550,550,25,300,300,215,300, 520);
  bezier(303,311,360,304,506,213,526,312);
  curve(360,304,357,289,359,289,301,309);
  curve(301,309,268,246,269,246,307,206);
  bezier(307,206,284,271,286,271,349,268);
  bezier(349,268,408,243,409,243,478,280);
  curve(478,285,522,256,525,256,499,218);
  bezier(499,218,453,640,7,500,325,485);
  bezierDetail(30);
  curveTightness(21);
  fill(104,54,44);
smooth();
ellipse(375, 345, 55, 55);
noSmooth();
ellipse(475, 345, 55,55);
}
document.write("<h1>Buffalo</h1>");
document.write("<h2>AcerliaBennett</h2>");
