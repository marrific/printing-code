var r = new Rune({
	container: "#canvas",
	width: 1100,
	height: 1600,
	debug: true
});




var colorlist = [
new Rune.Color('hsv',4,63,100),
new Rune.Color('hsv',0,0,100), //white
new Rune.Color('hsv',351, 92, 100),
new Rune.Color('hsv',351, 92, 100),
new Rune.Color('hsv',263, 85, 80),
new Rune.Color('hsv',249, 54, 74),
new Rune.Color('hsv',37, 71, 100),

new Rune.Color('hsv',228, 46, 100),
new Rune.Color('hsv',228, 46, 100),
new Rune.Color('hsv',239, 100, 37), //dark 
]

// var colorlistTwo = [
// new Rune.Color('hsv',hue, 194,43,100),
// new Rune.Color('hsv',hue, 194,43,100).vars.fill.darken(0.3)




// new Rune.Color('hsv',228, 46, 100),
// new Rune.Color('hsv',228, 46, 100),
// new Rune.Color('hsv',239, 100, 37), //dark 

// ]

// square1.fill('hsv', hue, 100, 100);
//   square2.fill('hsv', hue, 100, 100).vars.fill.darken(0.1);
//   square3.fill('hsv', hue, 100, 100).vars.fill.darken(0.2);











function randomColor() {
	var index = Math.round(Rune.random(colorlist.length-1));
	return colorlist[index];
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
			//.rotate(180, r.width/2,r.height/2);

			flower(0 , 0, height  ,-side/2 +13, height,side/2 + 4, tri)

		}
	}



	




///triangular ( sty & y at h/10)

	// for(h=0; h<=4; h++) {
	// 	// if(h == 0) {
	// 		var rowLength = Math.abs(h)*1.5 ;
	// 	// } else {
	// 	// 	rowLength = Math.abs(h)*1.25 - 2;
	// 	// }

	// 	for(g=-rowLength; g<=rowLength; g+=1) {

	// 		var tri = r.group(startX + g*2*height,startY+ h*side*2)
	// 		.rotate(180, r.width/2,r.height/2);

	// 		flower(0 , 0, height  ,-side/2, height,side/2, tri)

	// 	}
	// }

















	// for(h=0; h<=3; h++) {
	// 	if(h == 0) {
	// 		var rowLength = Math.abs(h)*1.5 -1;
	// 	} else {
	// 		rowLength = Math.abs(h)*1.5 - 1;
	// 	}

	// 	for(g=-rowLength; g<=rowLength; g+=1) {

	// 		var triTwo = r.group(startX + g*2*height,TwostartY+ h*side*2)
	// 		//.rotate(180, r.width/2,r.height/2);

	// 		flower(0 , 0, height  ,-side/2, height,side/2, triTwo)

	// 	}
	// }




// for(h=-2; h<=1; h++) {
//   if(h == 0) {
//     var rowLength = 3;
//   } else {
//     rowLength = 2;
//   }

//   for(g=-rowLength; g<=rowLength; g+=1) {

// 		var tri = r.group(startX + g*2*height,startY+ h*3*side)

// 		flower(0 , 0, height  ,-side/2, height,side/2, tri)


// 	}
// }



function flower (posXOne,posYOne,posXTwo,posYTwo, posXThree, posYThree, group) {

	for ( i = 0 ; i <6  ; i++) {

		r.triangle(posXOne,posYOne,posXTwo,posYTwo,posXThree, posYThree,group)
		.fill (randomColor())
		.rotate(side *i,0, 0 )
		.stroke(255)


	}


}




r.draw();

