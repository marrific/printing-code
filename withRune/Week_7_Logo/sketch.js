var r = new Rune({
	container: "#canvas",
	width: 800,
	height: 800,
	debug: false
});




points = [];



function Point(p, r, a, o, n) {
	this.position = p;
	this.r = r;
	this.offset = o;
	this.angle = a;
	this.num = n;


this.update = function() {
	this.o = r.height / 2
	this.angle += 0.01;
	this.position.x = Math.cos(Rune.radians(this.angle) * this.num) * this.r + this.o;
	this.position.y = Math.sin(Rune.radians(this.angle)) * this.r + this.o;

}



this.display = function() {

 	// fill(0);
 	// strokeWeight(0.1)
 	r.ellipse(this.position.x, this.position.y, 0.1, 0.1)

 }


}


///////////////// HOW DO I CREATE VECTORS? ///////////////////////




for (i = 0; i < 50; i++) {
	points.push(new Point(new Rune.Vector(550, 50), 100, 26, r.height / 2, 2));
	points.push(new Point(new Rune.Vector(50, 90), 200, 6, 100, 3));
	points.push(new Point(new Rune.Vector(150, 300), 50, 16, 200, 1));
	points.push(new Point(new Rune.Vector(10, 300), 100, 11, 133, 2));
	points.push(new Point(new Rune.Vector(234, 100), 110, 3, 320, 1));
	points.push(new Point(new Rune.Vector(134, 40), 90, 2, 120, 1.4));
	points.push(new Point(new Rune.Vector(20, 50), 30, 26, r.height / 2, 2));
	points.push(new Point(new Rune.Vector(70, 190), 200, 6, 100, 3));
	points.push(new Point(new Rune.Vector(350, 500), 70, 3, r.height / 2.4, 2));
	points.push(new Point(new Rune.Vector(350, 100), 220, 2, r.height -122 , 2));
	points.push(new Point(new Rune.Vector(134, 100), 80, 1, r.height -12, 1));
	points.push(new Point(new Rune.Vector(94, 100), 110, 6, 120, 1));



}




r.on('draw', function() {
	

//r.ellipse(points[i].position.x, points[i].position.y, 0.1, 0.1)
for (i = 0; i < points.length; i++) {
	points[i].update();
	points[i].display();            /////////// SHOULDN'T BE HERE !!!!!!!!!!!

}



r.triangle(points[0].position.x, points[0].position.y,
	points[1].position.x, points[1].position.y,
	points[2].position.x, points[2].position.y)

.fill(255,50)
r.triangle(points[3].position.x, points[3].position.y,
	points[4].position.x, points[4].position.y,
	points[5].position.x, points[5].position.y)
.fill(255,50)
r.triangle(points[6].position.x, points[6].position.y,
	points[7].position.x, points[7].position.y,
	points[8].position.x, points[8].position.y)
.fill(255,50)
r.triangle(points[9].position.x, points[9].position.y,
	points[11].position.x, points[11].position.y,
	points[10].position.x, points[10].position.y)
.fill(255,50)

	// var g = points[10].position.x;
	// var h = points[10].position.y;

	
	// r.line(points[9].position.x, points[10].position.y);



});



//r.ellipse(points[i].position.x, points[i].position.y, 0.1, 0.1)










r.play();