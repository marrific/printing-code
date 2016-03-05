var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 1000,
});





// Create a new Rune.Font object
var f = new Rune.Font("gotham-bold.ttf");

// load() will actually load the font file and call the function
// when the loading is done.
f.load(function(err) {


  // Get a path of the text "Rune" from the font
  // a x,y 200,200 and font size 120.
  
  var path = f.toPath("M", 200, 200, 200)
 
  r.stage.add(path)

 var pathTwo = f.toPath("M", 200, 200, 200)
  .moveTo(0, 0)
  .lineTo(200, 0)
  .lineTo(200, -150)
  .lineTo(0,-150)
  .fill(255,255,2)

.closePath()
  r.stage.add(pathTwo)

 

var noise = new Rune.Noise();
var xStep = 15;



for(var i = 0; i < 5; i++) {

  noise.noiseSeed(Rune.random(100));

  var noisePath = r.path(200, 270 + (i * 30))
    .stroke(255)
    .fill(false)
    .strokeWidth(2);

  var noiseStep = 0;

  for(var x = 0; x < r.width; x += xStep) {
    var y = noise.get(noiseStep) * 100;
    noisePath.lineTo(x, y);

    noiseStep += 0.1;
  }
}



r.draw();



});

