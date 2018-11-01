const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 600;

function setup() {
   createCanvas(IMAGE_WIDTH,
      IMAGE_HEIGHT);
      background (200);
   noLoop();
  }



function drawBody() {
  fill(139, 106, 75);
beginShape();
curveVertex(195, 121);
curveVertex(191, 120);
curveVertex(188, 120);
curveVertex(185, 121);
curveVertex(182, 127);
curveVertex(182, 135);
curveVertex(187, 142);
curveVertex(215, 168);
curveVertex(248, 192);
curveVertex(268, 204);
curveVertex(274, 206);
curveVertex(279, 205);
curveVertex(288, 213);
curveVertex(297, 218);
curveVertex(303, 218);
curveVertex(312, 217);
curveVertex(322, 214);
curveVertex(330, 214);
curveVertex(336, 219);
curveVertex(338, 224);
curveVertex(334, 233);
curveVertex(331, 247);
curveVertex(335, 255);
curveVertex(342, 272);
curveVertex(343, 309);
curveVertex(341, 328);
curveVertex(343, 335);
curveVertex(342, 361);
curveVertex(348, 381);
curveVertex(361, 401);
curveVertex(373, 414);
curveVertex(377, 433);
curveVertex(376, 454);
curveVertex(382, 469);
curveVertex(397, 501);
curveVertex(400, 508);
curveVertex(413, 520);
curveVertex(436, 519);
curveVertex(449, 511);
curveVertex(456, 498);
curveVertex(459, 485);
curveVertex(464, 474);
curveVertex(470, 471);
curveVertex(474, 465);
curveVertex(477, 465);
curveVertex(478, 444);
curveVertex(477, 433);
curveVertex(472, 428);
curveVertex(464, 413);
curveVertex(462, 404);
curveVertex(470, 364);
curveVertex(474, 333);
curveVertex(475, 297);
curveVertex(474, 266);
curveVertex(480, 264);
curveVertex(491, 249);
curveVertex(484, 228);
curveVertex(474, 219);
curveVertex(478, 208);
curveVertex(487, 209);
curveVertex(511, 207);
curveVertex(560, 186);
curveVertex(593, 161);
curveVertex(625, 117);
curveVertex(616, 108);
curveVertex(605, 110);
curveVertex(587, 122);
curveVertex(517, 142);
curveVertex(481, 153);
curveVertex(452, 165);
curveVertex(433, 166);
curveVertex(406, 151);
curveVertex(395, 149);
curveVertex(381, 154);
curveVertex(360, 166);
curveVertex(271, 146);
curveVertex(221, 135);
curveVertex(195, 121);
curveVertex(191, 120);
curveVertex(188, 120);

endShape();
}

function drawlEyes() {

    fill(0, 0, 0);

    beginShape();
    curveVertex(353, 250);
    curveVertex(365, 272);
    curveVertex(357, 276);
    curveVertex(353, 276);
    curveVertex(349, 272);
    curveVertex(347, 259);
    curveVertex(353, 251);

    endShape();
}

function drawrEyes() {

    fill(0, 0, 0);

    beginShape();
    curveVertex(354, 271);
    curveVertex(465, 270);
    curveVertex(472, 265);
    curveVertex(475, 257);
    curveVertex(470, 249);
    curveVertex(466, 249);
    endShape();
}

function drawMouth() {

    fill(188, 216, 240);

    beginShape();
    curveVertex(400, 431);
    curveVertex(398, 441);
    curveVertex(399, 448);
    curveVertex(403, 454);
    curveVertex(409, 459);
    curveVertex(414, 461);
    curveVertex(426, 462);
    curveVertex(445, 460);
    curveVertex(451, 451);
    curveVertex(460, 450);
    curveVertex(463, 441);
    curveVertex(463, 434);
    curveVertex(461, 427);
    curveVertex(465, 439);
    curveVertex(465, 448);
    curveVertex(462, 458);
    curveVertex(454, 465);
    curveVertex(445, 470);
    curveVertex(439, 472);
    curveVertex(425, 473);
    curveVertex(412, 471);
    curveVertex(403, 465);
    curveVertex(398, 465);
    curveVertex(397, 448);
    curveVertex(397, 443);
    curveVertex(399, 431);
    endShape();
}

function draw() {
    drawBody();
    drawlEyes();
    drawrEyes();
    drawMouth();

}
