function setup() {
createCanvas(500, 500);
}
function draw() {
background(143,199,239);
fill(239, 211, 143); // skin color
noStroke();
ellipse(250, 250, 200, 300);
fill(251, 250, 247); //white eye
ellipse(200,230,40 ,20); //left eye
fill(251, 250, 247); //white eye
ellipse(300,230,40 ,20); //right eye
fill(5, 5, 5); //black eye left
ellipse(200,230,20 ,20); //left eye
fill(5, 5, 5); //black eye right
ellipse(300,230,20 ,20); //right eye
fill(250, 199, 98); 
triangle(250,320,230,300,250,230); //nose
//mouth
fill(138, 49, 25)
arc(250, 330, 50, 50, radians(0), radians(180));
fill(255, 255, 255)
rect(225, 330, 50, 4);
//shirt
fill(240, 116, 20)
arc(248, 520, 265, 265, radians(180), radians(0));
//neck
fill(239, 211, 143); // skin color
rect(215, 370, 70, 70);
//round neck
fill(239, 211, 143)
arc(250, 410, 70, 101, radians(0), radians(180));
//eyebrown
//eyebrows
fill(0, 0, 0)
rect(185, 200, 40, 4);
rect(277, 200, 40, 4);
//front hair
fill(0, 0, 0)
arc(255, 178, 230, 230, radians(180), radians(400));
arc(230, 178, 200, 200, radians(150), radians(330));
//ear
fill(239, 211, 143)
arc(154, 250, 50, 50, radians(90), radians(270));
arc(349, 250, 50, 50, radians(270), radians(90));
//ear shade
fill(250, 199, 98)
arc(154, 250, 30, 30, radians(90), radians(270));
arc(349, 250, 30, 30, radians(270), radians(90));
//blush
fill(243,229,161);
ellipse(200,260,60,10);
ellipse(300,260,60,10);


}
