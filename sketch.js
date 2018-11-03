function setup() {

  var animalName = createElement('h1','guppy');//('tag','content') https://p5js.org/reference/#/p5/createElement
  var myName = createElement('h2','LYNN GENTRY');

  animalName.style('color','#323232');//('property','value') https://p5js.org/reference/#/p5.Element/style
  animalName.style('font-family','helvetica');
  animalName.style('font-size','15px');
  myName.style('color','#323232');
  myName.style('font-family','helvetica');
  myName.style('font-size','9px');

  createCanvas(500,400);//(w,h)

}//end setup function.

function draw() {
  background(32);//fills the background of the canvas with dark grey. https://p5js.org/reference/#/p5/background

    beginShape();//begin drawing guppy silohouette. gray-violet. https://p5js.org/reference/#/p5/beginShape
    noStroke();
    fill(248,245,255);//(r,g,b) gray-violet

    vertex(366,187);//the first anchor point. (x,y)

    bezierVertex(374,191,378,192,370,201);//the first control point (x,y), the second control point (x,y), and the next anchor point (x,y). https://p5js.org/reference/#/p5/bezierVertex
    bezierVertex(359,212,348,221,332,224);
    bezierVertex(327,225,325,229,319,230);
    bezierVertex(305,236,291,240,277,239);
    bezierVertex(266,239,256,241,246,243);
    bezierVertex(241,244,235,244,230,243);
    bezierVertex(222,239,213,240,205,240);
    bezierVertex(203,240,201,241,201,239);
    bezierVertex(201,237,200,234,203,233);
    bezierVertex(206,232,209,230,212,231);
    bezierVertex(215,232,218,232,222,231);
    bezierVertex(213,228,206,231,198,232);
    bezierVertex(187,234,176,236,165,238);
    bezierVertex(163,238,161,239,162,242);
    bezierVertex(163,243,162,245,161,246);
    bezierVertex(157,252,154,258,150,264);
    bezierVertex(146,270,141,274,138,281);
    bezierVertex(134,288,128,293,119,293);
    bezierVertex(114,294,110,297,105,300);
    bezierVertex(102,301,98,303,95,304);
    bezierVertex(94,305,92,306,91,304);
    bezierVertex(90,302,92,302,93,301);
    bezierVertex(94,301,95,300,97,299);
    bezierVertex(93,299,90,300,88,299);
    bezierVertex(86,298,85,299,85,301);
    bezierVertex(84,305,77,307,74,304);
    bezierVertex(72,302,73,300,75,299);
    bezierVertex(83,295,87,287,94,282);
    bezierVertex(88,285,81,285,75,289);
    bezierVertex(70,293,65,292,59,293);
    bezierVertex(56,293,54,290,53,288);
    bezierVertex(53,285,52,284,50,284);
    bezierVertex(49,284,48,283,48,281);
    bezierVertex(47,280,49,280,50,279);
    bezierVertex(57,276,64,273,71,270);
    bezierVertex(73,269,75,269,74,269);
    bezierVertex(74,265,72,266,70,266);
    bezierVertex(64,267,59,266,60,260);
    bezierVertex(61,258,66,259,71,260);
    bezierVertex(71,260,71,259,71,259);
    bezierVertex(67,258,64,258,60,258);
    bezierVertex(56,257,54,254,52,251);
    bezierVertex(50,250,53,248,54,249);
    bezierVertex(60,249,66,245,69,246);
    bezierVertex(66,245,62,244,58,241);
    bezierVertex(56,240,52,240,54,236);
    bezierVertex(55,234,52,234,51,234);
    bezierVertex(50,234,49,234,49,232);
    bezierVertex(49,231,48,230,50,229);
    bezierVertex(52,229,51,228,50,227);
    bezierVertex(48,225,47,224,46,222);
    bezierVertex(44,222,44,221,44,219);
    bezierVertex(45,218,48,217,47,215);
    bezierVertex(44,213,43,209,38,208);
    bezierVertex(37,208,35,208,33,208);
    bezierVertex(29,209,26,209,25,204);
    bezierVertex(24,203,23,202,23,202);
    bezierVertex(18,201,19,199,22,196);
    bezierVertex(25,194,26,189,30,187);
    bezierVertex(33,185,32,182,30,180);
    bezierVertex(27,179,26,177,27,174);
    bezierVertex(27,172,27,171,26,170);
    bezierVertex(20,167,24,164,27,163);
    bezierVertex(30,161,32,159,32,155);
    bezierVertex(31,153,34,152,36,153);
    bezierVertex(39,155,42,155,45,156);
    bezierVertex(46,156,47,157,48,155);
    bezierVertex(48,154,47,153,46,152);
    bezierVertex(42,152,41,149,39,146);
    bezierVertex(38,143,39,142,42,143);
    bezierVertex(45,144,46,142,47,140);
    bezierVertex(49,137,51,135,54,133);
    bezierVertex(57,131,60,133,62,134);
    bezierVertex(64,136,67,137,69,137);
    bezierVertex(72,138,74,140,74,135);
    bezierVertex(74,132,78,132,80,134);
    bezierVertex(82,135,84,137,87,139);
    bezierVertex(98,150,110,159,116,174);
    bezierVertex(118,177,122,178,125,180);
    bezierVertex(132,185,139,189,147,192);
    bezierVertex(151,193,156,193,160,191);
    bezierVertex(158,190,156,189,153,187);
    bezierVertex(167,186,181,186,194,183);
    bezierVertex(187,184,179,184,171,185);
    bezierVertex(169,185,165,186,164,184);
    bezierVertex(164,181,168,181,170,181);
    bezierVertex(172,180,174,180,178,179);
    bezierVertex(170,177,163,177,158,171);
    bezierVertex(162,170,165,172,168,172);
    bezierVertex(170,173,170,173,172,171);
    bezierVertex(173,169,176,170,178,170);
    bezierVertex(179,169,181,170,182,169);
    bezierVertex(183,167,180,167,180,165);
    bezierVertex(187,163,194,167,202,168);
    bezierVertex(201,165,199,165,198,165);
    bezierVertex(194,165,190,164,186,163);
    bezierVertex(185,163,184,163,184,162);
    bezierVertex(184,161,184,159,184,158);
    bezierVertex(187,156,187,152,184,150);
    bezierVertex(182,149,179,148,180,146);
    bezierVertex(181,143,184,145,186,145);
    bezierVertex(194,146,202,148,210,150);
    bezierVertex(218,152,224,157,230,162);
    bezierVertex(235,168,241,171,250,171);
    bezierVertex(271,170,293,172,314,175);
    bezierVertex(331,178,348,181,365,187);
    bezierVertex(365,187,365,187,366,187);

    endShape(CLOSE);//end grey-violet shape.

    beginShape();//begin complex yellow shape.
    fill(244,236,112);//fill shape with yellow.
    noStroke();//removes outline from shape.

    vertex(244,177);//the starting point of the shape.

    //below are the line segments of the shape.
    bezierVertex(242,181,241,181,239,182);
    bezierVertex(226,185,214,190,203,196);
    bezierVertex(200,197,199,199,200,201);
    bezierVertex(201,206,198,209,194,211);
    bezierVertex(188,215,177,218,168,218);
    bezierVertex(163,217,157,217,152,214);
    bezierVertex(147,212,143,215,144,221);
    bezierVertex(145,228,147,235,149,242);
    bezierVertex(152,249,151,253,146,257);
    bezierVertex(138,264,134,272,123,274);
    bezierVertex(117,275,108,273,104,271);
    bezierVertex(98,268,93,265,86,265);
    bezierVertex(75,265,77,261,71,257);
    bezierVertex(68,255,67,251,70,248);
    bezierVertex(74,244,74,245,69,242);
    bezierVertex(66,241,65,238,67,235);
    bezierVertex(69,233,68,232,67,231);
    bezierVertex(64,229,63,226,60,224);
    bezierVertex(58,223,57,220,59,218);
    bezierVertex(61,216,60,214,59,212);
    bezierVertex(55,206,57,203,64,203);
    bezierVertex(75,203,87,202,98,205);
    bezierVertex(99,205,102,206,98,205);
    bezierVertex(104,202,102,201,101,200);
    bezierVertex(100,197,96,194,99,191);
    bezierVertex(102,187,106,190,109,191);
    bezierVertex(110,191,111,191,112,192);
    bezierVertex(115,192,118,193,116,188);
    bezierVertex(115,182,117,181,123,182);
    bezierVertex(130,185,136,188,141,193);
    bezierVertex(143,195,146,196,148,196);
    bezierVertex(160,196,171,196,181,190);
    bezierVertex(183,188,185,189,188,189);
    bezierVertex(197,188,206,183,215,180);
    bezierVertex(222,177,229,175,237,173);
    bezierVertex(243,172,245,174,244,177);

    endShape(CLOSE);

    beginShape();//blue

    fill(199,233,235);
    noStroke();

    vertex(161,219);

    bezierVertex(166,218,171,216,177,217);
    bezierVertex(179,217,181,216,183,214);
    bezierVertex(186,212,188,211,191,209);
    bezierVertex(197,205,202,203,208,209);
    bezierVertex(210,211,213,211,216,211);
    bezierVertex(216,211,243,207,251,211);
    bezierVertex(251,211,257,210,260,211);
    bezierVertex(268,211,276,212,283,213);
    bezierVertex(290,213,295,214,300,217);
    bezierVertex(303,218,307,219,311,219);
    bezierVertex(313,219,316,219,317,221);
    bezierVertex(319,223,321,225,320,227);
    bezierVertex(320,230,317,229,315,229);
    bezierVertex(307,231,299,235,291,234);
    bezierVertex(278,234,263,221,258,224);
    bezierVertex(228,231,222,227,222,227);
    bezierVertex(222,227,201,228,188,233);
    bezierVertex(184,234,179,234,175,235);
    bezierVertex(166,236,162,230,158,224);
    bezierVertex(156,222,156,219,161,219);

    endShape(CLOSE);

    beginShape()//purple(eye)
    fill(133,127,161);
    noStroke();
    ellipse(349, 194, 15, 15);
    endShape();

    beginShape()//dark grey(eye)
    fill(32);
    noStroke();
    ellipse(349, 194, 9, 9);
    endShape();

}//end draw function.
