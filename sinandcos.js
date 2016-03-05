var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});



var numPoints = 3;
var pointDegree = 360 / numberPoints;

r.ellipse(0,0,50,50);
  
var x = Math.cos(Rune.radians(10)) * 200;  //goes clockwise  times radius
var y = Math.sin(Rune.radians(10)) * 200;

  
r.ellipse(y,y,50,50);



  )

r.draw();