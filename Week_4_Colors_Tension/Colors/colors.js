var r = new Rune({
	container: "#canvas",
	width: 1100,
	height: 1600,
	debug: true
});

color1 = new Rune.Color('hsv',6, 0, 24);
// color2 = new Rune.Color('hsv',0, 0, 100).lighten(0.5);
// color3 = new Rune.Color('hsv',224, 56, 11).lighten(0.8);
// color4 = new Rune.Color('hsv',212, 46, 54).lighten(0.2);

r.rect(0,0,1100,1250)
.fill(color1)
// .stroke(false);
// r.rect(550,0,1100,625)
// .fill(color2)
// .stroke(false);
// r.rect(550,625,1000,625)
// .fill(color3)
// .stroke(false);
// r.rect(0,625,550,625)
// .fill(color4)
// .stroke(false);

// var colorlist = [
// new Rune.Color('hsv',4,63,100),
// //new Rune.Color('hsv',0,0,100), //white
// new Rune.Color('hsv',351, 92, 100),
// new Rune.Color('hsv',351, 92, 100),
// new Rune.Color('hsv',263, 85, 80),
// new Rune.Color('hsv',249, 54, 74),
// new Rune.Color('hsv',37, 71, 100),

// new Rune.Color('hsv',228, 46, 100),
// new Rune.Color('hsv',228, 46, 100),
// new Rune.Color('hsv',239, 100, 37), //dark 

// ]


// var colorlist = [

// new Rune.Color('hsv',6,0,66),
// new Rune.Color('hsv',6,0,50),
// new Rune.Color('hsv',6,0,88),
// new Rune.Color('hsv',6,0,43),
// new Rune.Color('hsv',6,0,74),
// //oranges
// new Rune.Color('hsv',345,100,100),
// new Rune.Color('hsv',1,53,100)


// ]





var colorlistThree = [
new Rune.Color('hsv' ,36,14,14),
new Rune.Color('hsv',204,22,27),
new Rune.Color('hsv' ,205,31,43),
new Rune.Color('hsv',197,31,53),
new Rune.Color('hsv',40,89,100),
new Rune.Color('hsv',34,48,100)

]

// var colorlistThree = [
// new Rune.Color('hsv' ,6,86,100),
// new Rune.Color('hsv',6,56,27),
// new Rune.Color('hsv' ,6,86,50),
// new Rune.Color('hsv',6,56,50),
// new Rune.Color('hsv',6,86,80),
// new Rune.Color('hsv',188,100,92),
// new Rune.Color('hsv',188,100,69)

// ]









function randomColor() {
	var index = Math.round(Rune.random(colorlistThree.length-1));
	return colorlistThree[index];
}



var side = 60;
var startingX = 100;
var startingY = 100;
var offset = 10;
var height = side * Math.sqrt(3)/2
var startX = 0;
var startY = 0;
var TwostartY = 0;

var offset = 1.7;

 for(h=0; h<=9; h+=offset) {
	
		for(g=0; g<=9; g+=offset) {

			var tri = r.group( 2*height+ startX + height*2*h,height+side + startY + side*2*g)
		

			flower(0 , 0, height  ,-side/2, height,side/2, tri)

		}
	}




function flower (posXOne,posYOne,posXTwo,posYTwo, posXThree, posYThree, group) {

	for ( i = 0 ; i <6  ; i++) {

		r.triangle(posXOne,posYOne,posXTwo,posYTwo,posXThree, posYThree,group)
		.fill (randomColor())
		.rotate(side *i,0, 0 )
		.stroke(false)
		.strokeWidth(false)


	}


}




r.draw();

