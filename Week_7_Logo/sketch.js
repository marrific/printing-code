var rune = new Rune({
	container: "#canvas",
	width: 600,
	height: 600,
	debug: false,
	frameRate: 60 
});

//debugger;

points = [];

function Point(p, r, a, o, n) {
	this.position = p;
	this.radius = r;
	this.offset = o;
	this.angle = a;
	this.num = n;

	

	this.update = function() {

		this.o = rune.height / 2
		this.angle += 0.2;
		this.position.x = Math.cos(this.angle) * this.num * this.radius + this.o;
		this.position.y = Math.sin(this.angle) * this.radius + this.o;

	}

	this.display = function() {
	 	// strokeWidth(0.1)

	 	rune.ellipse(this.position.x, this.position.y, 0.5, 0.5)
	 	.fill(255);

	 }
	}


	for (i = 0; i < 13; i++) {






		points.push(new Point(new Rune.Vector(250, 50), 100, 26, 200, 1.2));
		points.push(new Point(new Rune.Vector(50, 90), 120, 1, 100, 1));
		points.push(new Point(new Rune.Vector(150, 200), 50, 16, 200, 1));
		points.push(new Point(new Rune.Vector(10, 300), 100, 11, 123, 2));
		points.push(new Point(new Rune.Vector(234, 100), 70, 3, 320, 1));
		points.push(new Point(new Rune.Vector(134, 140), 90, 2, 120, 1.4));
		points.push(new Point(new Rune.Vector(20, 50), 30, 26, rune.height / 2, 1.2));
		points.push(new Point(new Rune.Vector(350, 100), 70, 2, rune.height / 2.4, 1));
		points.push(new Point(new Rune.Vector(134, 100), 80, 1, rune.height - 12, 1));
		points.push(new Point(new Rune.Vector(21, 234), 123, 3, 132, 2));
		points.push(new Point(new Rune.Vector(94, 100), 110, 6, rune.height / 2, 1));
		points.push(new Point(new Rune.Vector(44, 156), 43, 2, 186, 1));



	}


	rune.on('draw', function() {
		console.log('drawing');

		rune.rect(0,0,rune.width,rune.height)
		.fill(0)
	//rune.ellipse(points[i].position.x, points[i].position.y, 0.1, 0.1)
	for (i = 0; i < points.length; i++) {


	// points[i].display();    
	points[i].update();
	rune.ellipse(points[i].position.x, points[i].position.y,3,3)

}


// ellipse //////





rune.triangle(points[0].position.x, points[0].position.y,
	points[1].position.x, points[1].position.y,
	points[2].position.x, points[2].position.y)

.fill(255,0.12)
.stroke(255)
.strokeWidth(0.1)
rune.triangle(points[3].position.x, points[3].position.y,
	points[8].position.x, points[8].position.y,
	points[5].position.x, points[5].position.y)
.fill(255,0.11)
.stroke(255)
.strokeWidth(0.1)
rune.triangle(points[6].position.x, points[6].position.y,
	points[7].position.x, points[7].position.y,
	points[9].position.x, points[9].position.y)
.fill(255,0.12)
.stroke(255)
.strokeWidth(0.1)
rune.triangle(points[4].position.x, points[4].position.y,
	points[11].position.x, points[11].position.y,
	points[10].position.x, points[10].position.y)
.fill(255,0.13)
.stroke(255)
.strokeWidth(0.1)

});


	rune.play();