const BACKGROUND_COLOR = `#808080`;
const IMAGE_WIDTH = 600
const IMAGE_HEIGHT = 400
const EYE_COLOR = `#FFB6C1`;
const NOSE_COLOR = `#FFB6C1`;
const BODY_COLOR = `#ADD8E6`;
const EAR_COLOR = `#FFB6C1`;



function setup(){

// NOTE: still need to fix header in here :(



    //let body = document.getElementsByTagName('body')[0];

  //  let h1 = document.createElement('h1');
  //  let h2 = document.createElement('h2');

  //  let name = document.createTextNode('Rodolfo Ramiro Rivera')
  //  let animal = document.createTextNode('Rabbit')

  //  h1.appendchild(animal);
  //  h2.appendchild(animal);
  //  body.appendchild(h1);
  //  body.appendchild(h2);





    createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);
    background(BACKGROUND_COLOR)
    noFill();
}



function draw() {


    drawear();
    drawbody();
    draweye();
    drawnose();
}


function drawnose(){
noStroke();
fill(NOSE_COLOR);

ellipse(166, 230, 9, 17);

}


function drawbody(){
noStroke();
fill(BODY_COLOR);

rect(257, 180, 170, 168);

rect(190, 190, 109, 57);

arc(400, 250, 260, 190, 10, HALF_PI);

arc(423, 329, 190, 40, 10, HALF_PI);

ellipse(279, 333, 89, 39);

ellipse(245, 194, 109, 57);

ellipse(230, 230, 129, 57);

triangle(195, 181, 167, 227, 260, 200);

triangle(214, 248, 258, 345, 360, 260);

triangle(522, 280, 510, 333, 442, 326);

}


function drawear(){
noStroke();
fill(EAR_COLOR);

ellipse(257, 140, 41, 177);

ellipse(279, 140, 41, 177);

}


function draweye(){
noStroke();
fill(EYE_COLOR);

ellipse(199, 190, 16, 17);

}
