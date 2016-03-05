var r = new Rune({
	container: "#canvas",
	width: 800,
	height: 1000,
	//debug: true
});

var recta = r.rect(0,0,r.width,r.height)
.fill(0)
.stroke(false)


var hooks = r.group(130, -20)
.rotate(22)



var li = r.path(100, 0,hooks)
.lineTo(0,200)
.lineTo(0,-200)
.strokeWidth(4)
.stroke(255)


var shape1 = r.path(100, 0,hooks)
  .lineTo(0, 100)
  .lineTo(0, 300)
  .curveTo(0, 600, 300, 600, 300, 300)
  .lineTo(260, 340)
  .lineTo(276, 340)
  .stroke(255)
  .strokeWidth(4)
  .fill(false);


r.rect(60,0,50,90,hooks)
.fill(0)
.stroke(false)

var shape1 = r.path(87.5, 10 -3,hooks)


  .curveTo(5, 15, 20, 15, 25, 0)
  //.lineTo(260, 340)
  .strokeWidth(4)
  .fill(false)
  .stroke(255);

  var shape2 = r.path(87.5, 25-3,hooks)

  .curveTo(5, 15, 20, 15, 25, 0)
  //.lineTo(260, 340)
  .strokeWidth(4)
  .stroke(255)
  .fill(false);

  var shape3 = r.path(87.5, 40-3,hooks)

  .curveTo(5,15, 20, 15, 25, 0)
  //.lineTo(260, 340)
  .strokeWidth(4)
  .stroke(255)
  .fill(false);

  var shape4 = r.path(87.5, 55-3,hooks)

  .curveTo(5, 15, 20, 15, 25, 0)
  //.lineTo(260, 340)
  .stroke(255)
  .strokeWidth(4)
  .fill(false);

  var shape4 = r.path(87.5, 70-3,hooks)

  .curveTo(5, 15, 20, 15, 25, 0)
  //.lineTo(260, 340)
  .strokeWidth(4)
  .stroke(255)
  .fill(false);


////////////////////////////// water ///////////////////////// 

var radius;
var offset = 20;
var angle;
var x = 180;
var xx = 200;
var xxx = 170;
var xxxx = 150;
var xxxxx = 120;
var xxxxxx = 100;
var xxxxxxx = 75;


var wavesSeven = r.group(0- xxxx/1.18,r.height- 2.15*(xx));
var wavesSix = r.group(0- xxxx/1.18,r.height- 1.95*(xx));
var wavesFive = r.group(0- xxxx/1.22,r.height- 1.7*(xx));
var wavesFour = r.group(0- xxxx/2,r.height- 1.4*(xx));
var wavesThree = r.group(-xx,r.height - xx);
var wavesOne = r.group(-x*1.5,r.height - xx/2 );
var wavesTwo = r.group(-xx,r.height);

for (a=0; a<= 1200; a+=xxxxxxx) {

	for (b=0; b<= 1000; b+=19) {

		r.ellipse(a-75,0 +60 ,(xxxxxxx-b),(xxxxxxx-b),wavesSeven)
		.fill(0)
		.strokeWidth(4   )
		.stroke(255)
		b = b + 1;
	}

}



for (a=0; a<= 1000; a+=xxxxxx) {

	for (b=0; b<= 900; b+=20) {

		r.ellipse(a,0 +50 ,(xxxxxx-b),(xxxxxx-b),wavesSix)
		.fill(0)
		.strokeWidth(4)
		.stroke(255)
		b = b + 1;
	}

}



for (a=0; a<= 1000; a+=xxxxx) {

	for (b=0; b<= 900; b+=22) {

		r.ellipse(a,0 + 37 ,(xxxxx-b),(xxxxx-b),wavesFive)
		.fill(0)
		.strokeWidth(3)
		.stroke(255)
		b = b + 1;
	}

}



for (a=0; a<= 900; a+=xxxx) {

	for (b=0; b<= 900; b+=22) {

		r.ellipse(a-20,0 +33,(xxxx-b),(xxxx-b),wavesFour)
		.fill(0)
		.strokeWidth(5)
		.stroke(255)
		b = b + 1;
	}

}



for (a=0; a<= 900; a+=xxx) {

	for (b=0; b<= 900; b+=28) {

		r.ellipse(xxx+a,0+12 ,(xxx-b),(xxx-b),wavesThree)
		.fill(0)
		.strokeWidth(5)
		.stroke(255)
		b = b + 1;
	}

}


for (j=0; j<= 800; j+=x) {

	for (i=0; i<= 200; i+=13) {

		r.ellipse(x+j,0 +10 ,(x-i),(x-i),wavesOne)
		.fill(0)
		.stroke(255)
		.strokeWidth(2.8)
		i = i + 1;
	}

}

for (m=0; m<= 800; m+=xx) {

	for (n=0; n<= 1000; n+=20) {

		


		r.ellipse(xx+m,0 ,(xx-n),(xx-n),wavesTwo)
		.fill(0)
		.stroke(255)
		.strokeWidth(5.5)
		//.strokeDash(2)
		n = n + 1;
	}

}


var myScaledGroup = wavesOne.scale(1.5);

var myScaledGroupTw0 = wavesTwo.scale(1.5);


var hookscaled = hooks.scale(0.8);
/////////////////////////////////// hook ////////////////////////////




  // .curveTo(200, 250, 100, 250, 100, 100)
  
  // .fill(false)
  // .stroke(0, 0, 0);


  r.draw();