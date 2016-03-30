var r = new Rune({
	container: "#canvas",
	width: 800,
	height: 800,
	debug: false
});



var rows = 12;
var columns = 25;
var side = 30; //of the square & distance

//variables to calibrate the randomness
var translationRandomness = .5;
var rotationRandomness = 1;



 console.log( RandomColor)
 for(var i = 0; i<rows; i++)
 {
 	for(var c = 0; c<columns; c++)
 	{


var myColors = [

 new Rune.Color(242,Rune.random(21,44),58), // ciemni rozowo-czews
 new Rune.Color(255,110,Rune.random(92,120)),
 new Rune.Color(230,0,22), // granat ciemny
 new Rune.Color(255,Rune.random(170,250),194), // light yellow
 new Rune.Color(Rune.random(220,250),148,10), //orange medium
 new Rune.Color(250,119,37) // orange dark

 ]


 var RandomColor = myColors[Math.floor(Math.random()*myColors.length)];

var numBer =Math.floor(Rune.random(3,10));

 		var xPos = 10 + i*side + (Rune.random(-translationRandomness*c,translationRandomness*c));
 		var yPos = 10 + c*side + (Rune.random(-translationRandomness*c,translationRandomness*c));
     // translate(xPos, yPos);

     var rotation = Rune.random(-c*rotationRandomness,c*rotationRandomness);      

     r.rect(xPos,yPos, side, side)
     .rotate(rotation,xPos,yPos)
     .fill(RandomColor)


 }

}

 //console.log(numBer)

 r.rect(40,40,100,100)
 .fill(RandomColor)







 r.draw();