var r = new Rune({
	container: "#canvas",
	width: 800,
	height: 800,
	debug: false
});

var noise = new Rune.Noise();

var noiseStep = 0;

for(var x = 0; x <r.width; x+=5) {


	var y = 200 + (noise.get(noiseStep) * 200);
	r.circle(x,y,2)

noiseStep +=0.05








}

var numPoint



r.draw();