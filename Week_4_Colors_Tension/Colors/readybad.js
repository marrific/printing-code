var r = new Rune({
	container: "#canvas",
	width: 1000,
	height: 1000,
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

function randomColor() {
	var index = Math.round(Rune.random(colorlist.length-1));
	return colorlist[index];
}



var side = 60;
var startingX = 100;
var startingY = 100;
var offset = 10;
var height = side* Math.sqrt(3)/2
var startX = r.width/2;
var startY = r.height/2;


for(g=-3; g<=3; g++){
	
	for(h=-1; h<=1; h++) {

		var tri = r.group(startX + g*2*height,startY+ h*3*side)

		flower(0 , 0, height  ,-side/2, height,side/2, tri)

		
	}
}



function flower (posXOne,posYOne,posXTwo,posYTwo, posXThree, posYThree, group) {

	for ( i = 0 ; i <6  ; i++) {

		r.triangle(posXOne,posYOne,posXTwo,posYTwo,posXThree, posYThree,group)
		.fill (randomColor())
		.rotate(side *i,0, 0 )
		.stroke(255)


	}


}




r.draw();

