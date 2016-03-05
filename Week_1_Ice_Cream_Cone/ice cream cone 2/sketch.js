var r = new Rune({
  container: "#canvas",
  
  width: 900,
  height: 900,
  debug: true
});

r.rect(0,0,900,900)
.fill(0)

var counter = 1;
var columns = 6  // * triHeight;
var  rows  = 6  //* triSide;
var triHeight = 60*Math.sqrt(3)/2* counter;
var triSide = 60* counter;
var Hspacing = 60 * counter;
var Vspacing = triHeight *counter;
var TristartsX = 0;




var rectHeight = 43;


r.rect(500, 30, 30, 350)
.rotate(14, 320, 35)
.fill(255, 255, 255)


r.ellipse(380, 400 -  3 * rectHeight, 180,180)
.fill(255, 255, 255)
.stroke(1)


r.ellipse(400 - 110, 400 - rectHeight, 180,180)

.fill(0, 0, 0)
.stroke(255)

r.ellipse(400 + 70, 400 - rectHeight, 180,180)
.fill(0, 0, 0)
.stroke(255)





r.rect(200,400-rectHeight,360 ,rectHeight)
.fill(255, 255, 255)
.stroke(1)



r.triangle(200, 400,
           200 + 360,400,
           200, 400 + triHeight*6 )

.fill(255, 255, 255)
.stroke(0)


//too messy!!!!!!!!!!!


var myGroup = r.group(200, 400);


for (var x = 0 * 60 * counter; x <= 360; x+=Hspacing) {
  for (var y = 0 * counter; y <= (columns*triSide)- x - triHeight; y+=Vspacing) {
 
var a = x //* Hspacing;
var b = y;
var c = x+triSide;
var d = y;
var e = x;
var f = y + triHeight;

counter = counter * x;

    var myTriangle = r.triangle(a , b , c,  d , e , f, myGroup)
    .fill(0, 0, 0)
    .stroke(255)



  }

};


r.draw();