function setup() {
 createCanvas(640, 480);

}

function draw() {
background(220);

push();
fill('yellow');
stroke('none');
translate(400, 60);
triangle(-30, 95, 58, -20, 126, 175); //upper fin


fill('yellow');
translate(120, 350);
triangle(40, -255, 78, -40, -106, -95); //lower fin


fill('yellow');
translate(-250, -270);
rotate(PI / 4);
rect(0, -90, 150, 125);
pop();

push();
stroke('none');
translate(width / 2, 290);
rotate(PI / 2);
fill('orange');
ellipse(0, 0, 300, 400);
pop();

push();
fill('black');
stroke(255);
strokeWeight(15);
translate(140, 200);
ellipse(56, 46, 35, 35);
pop();

}
