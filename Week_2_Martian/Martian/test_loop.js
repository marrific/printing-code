var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});




r.polygon(r.width/2, r.height/2)
.lineTo(r.width/2 + 100, r.height/2 +40)
.lineTo(r.width/2 + 100 +50, r.height/2 +50)

.lineTo(333 + 100 +50, 2 +50)
.stroke(255,25,0);


r.rect(0,0,800,1000)
.fill(0);
r.triangle(0,200,0,1000,800,700)
.fill(255)
.stroke(false);
r.rect(0,700,800,1000)
.fill(255)
.stroke(false);



//stars 

for ( z = 1; z <= 100; z +=2) {


 for ( h = 1; h <= 100; h +=2) {
  var o = Rune.random (0,700)
  var m = Rune.random (10,1000)

  var a;
  var b;

  m ++;
  o ++;

  a = z + o;
  b = m * h;
  var colorO; 
  var colorT; 
  var colorTh; 

  r.ellipse( a, b, 4, 4)

  .fill(colorO,colorT,colorTh)
  .stroke(0)
  .strokeWidth(1.2)



}
if ( b > 400 ) {

  var colorO = 255;
  var colorT = 255;
  var colorTh = 255;

}

else {
  colorO = 255;
 colorT = 255;
 colorTh = 255;
}
}
















var scale = 0.7;

var starX = Rune.random(0, r.width);
var starY = Rune.random(0, r.height);
var starSize = Rune.random(1, 5);
var starOpacity = Rune.random(100,255);
var dist = Rune.random(5,25);

///////////////////////////////////////////////////////   LEFT DUDE ////////////////////////////////////////////////


var myGroup = r.group(r.width/3.5,r.height/1.6).rotate(55, r.width/3.5,r.height/1.3);
var scaleTwo = 1.4;
var xHead = 0;
var yHead = 0;
var unit = 30;
var head = unit*3;
var shoulder = unit *2.8;

//right body


r.polygon(xHead, yHead, myGroup)
.lineTo(xHead + unit, yHead+ unit,myGroup)
.lineTo(xHead + 70 , yHead + 70,myGroup)
.lineTo(xHead + 110, yHead+ unit,myGroup)
.lineTo(xHead + 130, yHead+ unit + 20,myGroup)
.lineTo(xHead + 70, yHead+ unit + 80,myGroup)
.lineTo(xHead + 50, yHead+ unit + 64,myGroup)
.lineTo(xHead + 50, yHead+ unit + 140,myGroup)
.lineTo(xHead + 80, yHead+ unit + 210,myGroup)
.lineTo(xHead + 70, yHead+ unit + 240,myGroup)
.lineTo(xHead + 100, yHead+ unit + 260,myGroup)
.lineTo(xHead + 89, yHead+ unit + 285,myGroup)
.lineTo(xHead + 33, yHead+ unit + 255,myGroup)
.lineTo(xHead + 42, yHead+ unit + 220,myGroup)
.lineTo(xHead + 42, yHead+ unit + 220,myGroup)
.lineTo(xHead + 10, yHead+ unit + 150,myGroup)
.lineTo(xHead + -5, yHead+ unit + 149,myGroup)
.lineTo(xHead , yHead ,myGroup)
.stroke(0)
.strokeWidth(2*scaleTwo)
.fill(0)
.strokeJoin("round")

//left body

r.polygon(xHead, yHead, myGroup)
.lineTo(xHead - unit, yHead+unit,myGroup)
.lineTo(xHead - 70 , yHead +70,myGroup)
.lineTo(xHead - 110, yHead+ unit,myGroup)
.lineTo(xHead - 130, yHead+ unit + 20,myGroup)
.lineTo(xHead - 70, yHead+ unit + 80,myGroup)
.lineTo(xHead - 50, yHead+ unit + 64,myGroup)
.lineTo(xHead - 50, yHead+ unit + 140,myGroup)
.lineTo(xHead - 80, yHead+ unit + 210,myGroup)
.lineTo(xHead - 70, yHead+ unit + 240,myGroup)
.lineTo(xHead - 100, yHead+ unit + 260,myGroup)
.lineTo(xHead - 89, yHead+ unit + 285,myGroup)
.lineTo(xHead - 33, yHead+ unit + 255,myGroup)
.lineTo(xHead - 42, yHead+ unit + 220,myGroup)
.lineTo(xHead - 42, yHead+ unit + 220,myGroup)
.lineTo(xHead - 10, yHead+ unit + 150,myGroup)
.lineTo(xHead + 5, yHead+ unit + 149,myGroup)
.lineTo(xHead , yHead ,myGroup)
.stroke(0)
.strokeWidth(2*scaleTwo)
.fill(0)
.strokeJoin("round")

//arm right

r.ellipse(116, yHead+ unit  + 13, 42,42,myGroup)
.fill(0)
.strokeWidth(7*scaleTwo)
.stroke(255);


//arm left

r.ellipse(- 116, yHead+ unit  + 13, 42,42,myGroup)
.fill(0)
.strokeWidth(2*scaleTwo)
.stroke(255);




/////////////////////////////////////// patterns ///////////////////////////////////////////////////////////

// left pattern 

r.path(xHead, yHead, myGroup)
.lineTo(xHead - 30 , 25,myGroup)
.lineTo(xHead - 30 , 100,myGroup)
.lineTo(xHead - 70 , 130,myGroup)
.stroke(255)
.strokeWidth(2 *scaleTwo)
.fill(false)
.strokeJoin("round")

// right pattern 

r.path(xHead, yHead, myGroup)
.lineTo(xHead + 30 , 25,myGroup)
.lineTo(xHead + 30 , 100,myGroup)
.lineTo(xHead + 70 , 130,myGroup)
.stroke(255)
.strokeWidth(2*scaleTwo )
.fill(false)
.strokeJoin("round")

// left leg patterm

r.path(xHead, yHead + 200, myGroup)
.lineTo(xHead - 180, yHead - 60,myGroup)
.lineTo(xHead - 80 , 20,myGroup)
.lineTo(xHead - 20 , 20,myGroup)
.stroke(255)
.strokeWidth(2*scaleTwo )
.fill(false)
.strokeJoin("round")


// left leg patterm

r.path(xHead, yHead + 200, myGroup)
.lineTo(xHead + 180, yHead - 60,myGroup)
.lineTo(xHead + 80 , 20,myGroup)
.lineTo(xHead + 20 , 20,myGroup)
.stroke(255)
.strokeWidth(2 *scaleTwo)
.fill(false)
.strokeJoin("round")


//head

var headOne = r.ellipse(xHead,yHead,head +4,head+4,myGroup)
.fill(0)
.stroke(255)
.strokeWidth(2*scaleTwo)

r.ellipse(xHead,yHead ,head-16,head-22,myGroup)
.fill(255)

r.rect(xHead - head/2 +8, yHead + 6,head - 16, 30, myGroup )
.fill(0)
.stroke(false)

r.ellipse(xHead,yHead,head +4,head+4,myGroup)
.fill(false)
.stroke(255)
.strokeWidth(2*scaleTwo)




var myScaledGroup = myGroup.scale(scaleTwo);



////////////////////////////////////////////////////////////////////// SECOND GUY ////////////////////////////////////////////



var myGroupTwo = r.group(r.width/1.3,r.height/4.1)

var xHead = 0;
var yHead = 0;
var unit = 30;
var head = unit*3;
var shoulder = unit *2.8;

//right body


r.polygon(xHead, yHead, myGroupTwo)
.lineTo(xHead + unit, yHead+ unit,myGroupTwo)
.lineTo(xHead + 70 , yHead + 70,myGroupTwo)
.lineTo(xHead + 110, yHead+ unit,myGroupTwo)
.lineTo(xHead + 130, yHead+ unit + 20,myGroupTwo)
.lineTo(xHead + 70, yHead+ unit + 80,myGroupTwo)
.lineTo(xHead + 50, yHead+ unit + 64,myGroupTwo)
.lineTo(xHead + 50, yHead+ unit + 140,myGroupTwo)
.lineTo(xHead + 80, yHead+ unit + 210,myGroupTwo)
.lineTo(xHead + 70, yHead+ unit + 240,myGroupTwo)
.lineTo(xHead + 100, yHead+ unit + 260,myGroupTwo)
.lineTo(xHead + 89, yHead+ unit + 285,myGroupTwo)
.lineTo(xHead + 33, yHead+ unit + 255,myGroupTwo)
.lineTo(xHead + 42, yHead+ unit + 220,myGroupTwo)
.lineTo(xHead + 42, yHead+ unit + 220,myGroupTwo)
.lineTo(xHead + 10, yHead+ unit + 150,myGroupTwo)
.lineTo(xHead + -5, yHead+ unit + 149,myGroupTwo)
.lineTo(xHead , yHead ,myGroupTwo)
.stroke(255)
.strokeWidth(3*scale)
.fill(255)
.strokeJoin("round")

//left body

r.polygon(xHead, yHead, myGroupTwo)
.lineTo(xHead - unit, yHead+unit,myGroupTwo)
.lineTo(xHead - 70 , yHead +70,myGroupTwo)
.lineTo(xHead - 110, yHead+ unit,myGroupTwo)
.lineTo(xHead - 130, yHead+ unit + 20,myGroupTwo)
.lineTo(xHead - 70, yHead+ unit + 80,myGroupTwo)
.lineTo(xHead - 50, yHead+ unit + 64,myGroupTwo)
.lineTo(xHead - 50, yHead+ unit + 140,myGroupTwo)
.lineTo(xHead - 80, yHead+ unit + 210,myGroupTwo)
.lineTo(xHead - 70, yHead+ unit + 240,myGroupTwo)
.lineTo(xHead - 100, yHead+ unit + 260,myGroupTwo)
.lineTo(xHead - 89, yHead+ unit + 285,myGroupTwo)
.lineTo(xHead - 33, yHead+ unit + 255,myGroupTwo)
.lineTo(xHead - 42, yHead+ unit + 220,myGroupTwo)
.lineTo(xHead - 42, yHead+ unit + 220,myGroupTwo)
.lineTo(xHead - 10, yHead+ unit + 150,myGroupTwo)
.lineTo(xHead + 5, yHead+ unit + 149,myGroupTwo)
.lineTo(xHead , yHead ,myGroupTwo)
.stroke(255)
.strokeWidth(2*scale)
.fill(255)
.strokeJoin("round")

//arm right

r.ellipse(116, yHead+ unit  + 13, 42,42,myGroupTwo)
.fill(255)
.strokeWidth(3 *scale)


//arm left

r.ellipse(- 116, yHead+ unit  + 13, 42,42,myGroupTwo)
.fill(255)
.strokeWidth(3 *scale)




/////////////////////////////////////// patterns ///////////////////////////////////////////////////////////

// left pattern 

r.path(xHead, yHead, myGroupTwo)
.lineTo(xHead - 30 , 25,myGroupTwo)
.lineTo(xHead - 30 , 100,myGroupTwo)
.lineTo(xHead - 70 , 130,myGroupTwo)
.stroke(0)
.strokeWidth(3 *scale)
.fill(false)
.strokeJoin("round")

// right pattern 

r.path(xHead, yHead, myGroupTwo)
.lineTo(xHead + 30 , 25,myGroupTwo)
.lineTo(xHead + 30 , 100,myGroupTwo)
.lineTo(xHead + 70 , 130,myGroupTwo)
.stroke(0)
.strokeWidth(3*scale )
.fill(false)
.strokeJoin("round")

// left leg patterm

r.path(xHead, yHead + 200, myGroupTwo)
.lineTo(xHead - 180, yHead - 60,myGroupTwo)
.lineTo(xHead - 80 , 20,myGroupTwo)
.lineTo(xHead - 20 , 20,myGroupTwo)
.stroke(0)
.strokeWidth(3*scale )
.fill(false)
.strokeJoin("round")


// left leg patterm

r.path(xHead, yHead + 200, myGroupTwo)
.lineTo(xHead + 180, yHead - 60,myGroupTwo)
.lineTo(xHead + 80 , 20,myGroupTwo)
.lineTo(xHead + 20 , 20,myGroupTwo)
.stroke(0)
.strokeWidth(3 *scale)
.fill(false)
.strokeJoin("round")


//head

var headOne = r.ellipse(xHead,yHead,head +4,head+4,myGroupTwo)
.fill(255)
.stroke(0)
.strokeWidth(3*scale)

r.ellipse(xHead,yHead ,head-16,head-22,myGroupTwo)
.fill(0)


r.rect(xHead - head/2 +8, yHead + 6,head - 16, 30, myGroupTwo )
.fill(255)
.stroke(255)

r.ellipse(xHead,yHead,head +4,head+4,myGroupTwo)
.fill(false)
.stroke(0)
.strokeJoin("round")
.strokeWidth(3*scale)




var myScaledGroupTwo = myGroupTwo.scale(scale).rotate(125, r.width/1.3,r.height/4.1);


var lineGroup = r.group(r.width/2,r.height/2).rotate(-209, r.width/2,r.height/2);

var d = 255;
var counter = 0;
// 100 iterations
var increase = Math.PI *3 / 18;
for ( g = 0.12; g <= 5; g += 0.14 ) {

 var y = 100 *Math.sin( counter )/ 2 + 0.5
 

 r.ellipse( 96* g * 1.8 - 210 , y + 100 , 10 * 0.7*g  +2 , 2 +10 * 0.7*g, lineGroup )
 .fill(d)
 .stroke(0);
 
 if (g > 1.08 ) {
  d = 0;

}
counter += increase;


}


var lineGroupTwo = r.group(r.width/1.2,r.height/1.3).rotate(210, r.width - 5,r.height/1.1 + 20);


var counterTwo = 0;
// 100 iterations
var increaseTwo = Math.PI *3 / 18;
for ( e = 0.12; e <= 4; e += 0.19 ) {

 var y = 100 *Math.sin( counterTwo )/ 1.2 + 0.5
 

 r.ellipse( 96* e * 1.8 - 210 , y + 100 , 10 * 0.7*e  +2 , 2 +10 * 0.7*e, lineGroupTwo )
 .fill(0)
 
 counterTwo += increaseTwo;

}


r.draw();