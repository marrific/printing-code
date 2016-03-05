var r = new Rune({
  container: "#canvas",
  width: 510,
  height: 1000,
});

r.rect(0,0,1000,1000)
.fill(0);


// Create a new Rune.Font object
var f = new Rune.Font("gotham-bold.ttf");
var col = new Rune.Color(255);
var spacing = 100;
var spacingBox = 10;

// load() will actually load the font file and call the function
// when the loading is done.

var pos = 20;
var pos2 = 140;


//myFunction.move(20, 0, true);

f.load(function(err) {


// robie maske, ktora nakladam na litere A


var mask_A = f.toPath("a", 40 + pos, 100, 100)
.moveTo(0, 0)
.lineTo(60, 0)
.lineTo(60, -150)
.lineTo(0,-150)
.fill(0).stroke(false)
.closePath()


// tu mam sciezke litery A

var l_A = f.toPath("a", 40+ pos, 100, 100)
.fill(0)
r.stage.add(l_A)

 // konwertuje ja na poligon

 var polys = l_A.toPolygons({ spacing:6 });

 for(var ia = 0; ia < polys.length; ia++) {

  var poly = polys[ia];
  poly.move(0, 0, true);

}


for(var ja = 0; ja < poly.vars.vectors.length; ja++) {

 var vec = poly.vars.vectors;
 
 var g = poly.vars.vectors.length.toString();
 var l = g - 1;



// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(l));
var Two = Math.round(Rune.random(l));
var Three = Math.round(Rune.random(l));
var Four = Math.round(Rune.random(l));
var Five = Math.round(Rune.random(l));
var Six = Math.round(Rune.random(l));

r.line( poly.vars.x + vec[One].x, poly.vars.y + vec[One].y, poly.vars.x + vec[Two].x, poly.vars.y + vec[Two].y)
.stroke(col)
.strokeWidth(0.2) 
r.line( poly.vars.x + vec[Three].x, poly.vars.y + vec[Three].y, poly.vars.x + vec[Four].x, poly.vars.y + vec[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( poly.vars.x + vec[Five].x, poly.vars.y + vec[Five].y, poly.vars.x + vec[Six].x, poly.vars.y + vec[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}
 /////////////////////////////////////// B ///////////////////////////////////////////////
// 


var mask_B = f.toPath("b", 40 + spacing + pos, 100, 100)
.moveTo(0, 0)
.lineTo(70, 00)
.lineTo(70, -150)
.lineTo(0,-150)
.fill(0).stroke(false)
.closePath()


// tu mam sciezke litery B

var l_B = f.toPath("b", 40 + spacing + pos, 100, 100)
.fill(0)
r.stage.add(l_B)

 // konwertuje ja na poligon

 var polysB = l_B.toPolygons({ spacing:6 });

 for(var ib = 0; ib < polysB.length; ib++) {

  var polyB = polysB[ib];
  polyB.move(0, 0, true);

}


for(var jb = 0; jb < polyB.vars.vectors.length; jb++) {    


 var vecB = polyB.vars.vectors;
 
 var gb = polyB.vars.vectors.length.toString();
 var lb = gb - 1;

 console.log(polyB.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lb));
var Two = Math.round(Rune.random(lb));
var Three = Math.round(Rune.random(lb));
var Four = Math.round(Rune.random(lb));
var Five = Math.round(Rune.random(lb));
var Six = Math.round(Rune.random(lb));

r.line( polyB.vars.x + vecB[One].x, polyB.vars.y + vecB[One].y, polyB.vars.x + vecB[Two].x, polyB.vars.y + vecB[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyB.vars.x + vecB[Three].x, polyB.vars.y + vecB[Three].y, polyB.vars.x + vecB[Four].x, polyB.vars.y + vecB[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyB.vars.x + vecB[Five].x, polyB.vars.y + vecB[Five].y, polyB.vars.x + vecB[Six].x, polyB.vars.y + vecB[Six].y)

.stroke(col)
.strokeWidth(0.2) ;



}

 /////////////////////////////////////// C ///////////////////////////////////////////////
//


var mask_C = f.toPath("c", 50 + spacing*2 + pos, 100, 100)
.moveTo(0, 0)
.lineTo(70, 00)
.lineTo(70, -150)
.lineTo(0,-150)
.fill(0).stroke(false)
.closePath()


// tu mam sciezke litery B

var l_C = f.toPath("c", 50 + spacing*2 + pos, 100, 100)
.fill(0)
r.stage.add(l_C)

 // konwertuje ja na poligon

 var polysC = l_C.toPolygons({ spacing:6 });

 for(var ic = 0; ic < polysC.length; ic++) {

  var polyC = polysC[ic];
  polyC.move(0, 0, true);

}


for(var jc = 0; jc < polyC.vars.vectors.length; jc++) {

 var vecC = polyC.vars.vectors;
 
 var gc = polyC.vars.vectors.length.toString();
 var lc = gc - 1;

//console.log(polyC.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lc));
var Two = Math.round(Rune.random(lc));
var Three = Math.round(Rune.random(lc));
var Four = Math.round(Rune.random(lc));
var Five = Math.round(Rune.random(lc));
var Six = Math.round(Rune.random(lc));

r.line( polyC.vars.x + vecC[One].x, polyC.vars.y + vecC[One].y, polyC.vars.x + vecC[Two].x, polyC.vars.y + vecC[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyC.vars.x + vecC[Three].x, polyC.vars.y + vecC[Three].y, polyC.vars.x + vecC[Four].x, polyC.vars.y + vecC[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyC.vars.x + vecC[Five].x, polyC.vars.y + vecC[Five].y, polyC.vars.x + vecC[Six].x, polyC.vars.y + vecC[Six].y)

.stroke(col)
.strokeWidth(0.2) ;



}

/////////////////////////////////////// D ///////////////////////////////////////////////
//


var mask_D = f.toPath("d", 50 + spacing*3+ pos, 100, 100)
.moveTo(0, 0)
.lineTo(70, 00)
.lineTo(70, -150)
.lineTo(0,-150)
.fill(0).stroke(false)
.closePath()


// tu mam sciezke litery B

var l_D = f.toPath("d", 50 + spacing*3+ pos, 100, 100)
.fill(0)
r.stage.add(l_D)

 // konwertuje ja na poligon

 var polysD = l_D.toPolygons({ spacing:6 });

 for(var id = 0; id < polysD.length; id++) {

  var polyD = polysD[id];
  polyD.move(0, 0, true);

}


for(var jd = 0; jd < polyD.vars.vectors.length; jd++) {

 var vecD = polyD.vars.vectors;
 
 var gd = polyD.vars.vectors.length.toString();
 var ld = gd - 1;

//console.log(polyC.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(ld));
var Two = Math.round(Rune.random(ld));
var Three = Math.round(Rune.random(ld));
var Four = Math.round(Rune.random(ld));
var Five = Math.round(Rune.random(ld));
var Six = Math.round(Rune.random(ld));

r.line( polyD.vars.x + vecD[One].x, polyD.vars.y + vecD[One].y, polyD.vars.x + vecD[Two].x, polyD.vars.y + vecD[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyD.vars.x + vecD[Three].x, polyD.vars.y + vecD[Three].y, polyD.vars.x + vecD[Four].x, polyD.vars.y + vecD[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyD.vars.x + vecD[Five].x, polyD.vars.y + vecD[Five].y, polyD.vars.x + vecD[Six].x, polyD.vars.y + vecD[Six].y)

.stroke(col)
.strokeWidth(0.2) ;



}


//////////////////////  E //////////////////////////////////////////////////////
var mask_E = f.toPath("e", 40 + pos, 80 + pos2, 100)
.moveTo(0, 0)
.lineTo(70, 00)
.lineTo(70, -80)
.lineTo(0,-80)
.fill(0).stroke(false)
.closePath()


// tu mam sciezke litery B

var l_E = f.toPath("e", 40 + pos, 80 + pos2, 100)
.fill(0)
r.stage.add(l_E)

 // konwertuje ja na poligon

 var polysE = l_E.toPolygons({ spacing:6 });

 for(var id = 0; id < polysE.length; id++) {

  var polyE = polysE[id];
  polyE.move(0, 0, true);

}


for(var je = 0; je < polyE.vars.vectors.length; je++) {

 var vecE = polyE.vars.vectors;
 
 var ge = polyE.vars.vectors.length.toString();
 var le = ge - 1;

//console.log(polyC.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(le));
var Two = Math.round(Rune.random(le));
var Three = Math.round(Rune.random(le));
var Four = Math.round(Rune.random(le));
var Five = Math.round(Rune.random(le));
var Six = Math.round(Rune.random(le));

r.line( polyE.vars.x + vecE[One].x, polyE.vars.y + vecE[One].y, polyE.vars.x + vecE[Two].x, polyE.vars.y + vecE[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyE.vars.x + vecE[Three].x, polyE.vars.y + vecE[Three].y, polyE.vars.x + vecE[Four].x, polyE.vars.y + vecE[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyE.vars.x + vecE[Five].x, polyE.vars.y + vecE[Five].y, polyE.vars.x + vecE[Six].x, polyE.vars.y + vecE[Six].y)

.stroke(col)
.strokeWidth(0.2) ;



}



//////////////////////////////////////// F //////////////////////////////////////


var mask_F = f.toPath("f", 50 + pos+ spacing, 80 + pos2, 100)
.moveTo(0, 0)
.lineTo(60, 00)
.lineTo(60, -80)
.lineTo(0,-80)
.fill(0).stroke(false)
.closePath()


// tu mam sciezke litery B

var l_F = f.toPath("f", 50 + pos + spacing, 80 + pos2, 100)
.fill(0)
r.stage.add(l_F)

 // konwertuje ja na poligon

 var polysF = l_F.toPolygons({ spacing:6 });

 for(var idf = 0; idf < polysF.length; idf++) {

  var polyF = polysF[idf];
  polyF.move(0, 0, true);

}


for(var jf = 0; jf < polyF.vars.vectors.length; jf++) {

 var vecF = polyF.vars.vectors;
 
 var gf = polyF.vars.vectors.length.toString();
 var lf = gf - 1;

//consolf.log(polyC.vars.vectors.lfngth)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lf));
var Two = Math.round(Rune.random(lf));
var Three = Math.round(Rune.random(lf));
var Four = Math.round(Rune.random(lf));
var Five = Math.round(Rune.random(lf));
var Six = Math.round(Rune.random(lf));

r.line( polyF.vars.x + vecF[One].x, polyF.vars.y + vecF[One].y, polyF.vars.x + vecF[Two].x, polyF.vars.y + vecF[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyF.vars.x + vecF[Three].x, polyF.vars.y + vecF[Three].y, polyF.vars.x + vecF[Four].x, polyF.vars.y + vecF[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyF.vars.x + vecF[Five].x, polyF.vars.y + vecF[Five].y, polyF.vars.x + vecF[Six].x, polyF.vars.y + vecF[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}


//////////////////////////////////////////G //////////////////////////////////////

var mask_G = f.toPath("g", 70 + pos*10 - 3, 80 + pos2, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -60)
.lineTo(0,-60)
.fill(0).stroke(false)
.closePath()


// tu mam sciezke litery B

var l_G = f.toPath("g", 70 + pos*10 - 3, 80 + pos2, 100)
.fill(0)
r.stage.add(l_G)

 // konwertuje ja na poligon

 var polysG = l_G.toPolygons({ spacing:6 });

 for(var ig = 0; ig < polysG.length; ig++) {

  var polyG = polysG[ig];
  polyG.move(0, 0, true);

}


for(var jg = 0; jg < polyG.vars.vectors.length; jg++) {

 var vecG = polyG.vars.vectors;
 
 var gf = polyG.vars.vectors.length.toString();
 var lg = gf - 1;

//consolg.log(polyC.vars.vectors.lgngth)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lg));
var Two = Math.round(Rune.random(lg));
var Three = Math.round(Rune.random(lg));
var Four = Math.round(Rune.random(lg));
var Five = Math.round(Rune.random(lg));
var Six = Math.round(Rune.random(lg));

r.line( polyG.vars.x + vecG[One].x, polyG.vars.y + vecG[One].y, polyG.vars.x + vecG[Two].x, polyG.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyG.vars.x + vecG[Three].x, polyG.vars.y + vecG[Three].y, polyG.vars.x + vecG[Four].x, polyG.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyG.vars.x + vecG[Five].x, polyG.vars.y + vecG[Five].y, polyG.vars.x + vecG[Six].x, polyG.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}



//////////////////////////////////////////  H   //////////////////////////////////


var mask_H = f.toPath("h", 96 + pos*14, 80 + pos2, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()


// tu mam sciezke litery B

var l_H = f.toPath("h", 96 + pos*14, 80 + pos2, 100)
.fill(0)
r.stage.add(l_H)

 // konwertuje ja na polihon

 var polysH = l_H.toPolygons({ spacing:6 });

 for(var ih = 0; ih < polysH.length; ih++) {

  var polyH = polysH[ih];
  polyH.move(0, 0, true);

}


for(var jh = 0; jh < polyH.vars.vectors.length; jh++) {

 var vecG = polyH.vars.vectors;
 
 var gh = polyH.vars.vectors.length.toString();
 var lh = gh - 1;

//consolh.log(polyC.vars.vectors.lhngth)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lh));
var Two = Math.round(Rune.random(lh));
var Three = Math.round(Rune.random(lh));
var Four = Math.round(Rune.random(lh));
var Five = Math.round(Rune.random(lh));
var Six = Math.round(Rune.random(lh));

r.line( polyH.vars.x + vecG[One].x, polyH.vars.y + vecG[One].y, polyH.vars.x + vecG[Two].x, polyH.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyH.vars.x + vecG[Three].x, polyH.vars.y + vecG[Three].y, polyH.vars.x + vecG[Four].x, polyH.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyH.vars.x + vecG[Five].x, polyH.vars.y + vecG[Five].y, polyH.vars.x + vecG[Six].x, polyH.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}



//////////////////////////////////////////   I  ///////////////////////////////

var mask_I = f.toPath("l", 55 + pos, 80 + pos2 * 2, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke litery B

var l_I = f.toPath("l", 55 + pos, 80 + pos2* 2, 100)
.fill(0)
r.stage.add(l_I)

 // konwertuje ja na poliion

 var polysI = l_I.toPolygons({ spacing:6 });

 for(var ii = 0; ii < polysI.length; ii++) {

  var polyI = polysI[ii];
  polyI.move(0, 0, true);

}


for(var ji = 0; ji < polyI.vars.vectors.length; ji++) {

 var vecG = polyI.vars.vectors;
 
 var gi = polyI.vars.vectors.length.toString();
 var li = gi - 1;

console.log(polyI.vars.y)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(li));
var Two = Math.round(Rune.random(li));
var Three = Math.round(Rune.random(li));
var Four = Math.round(Rune.random(li));
var Five = Math.round(Rune.random(li));
var Six = Math.round(Rune.random(li));

r.line( polyI.vars.x + vecG[One].x, polyI.vars.y + vecG[One].y, polyI.vars.x + vecG[Two].x, polyI.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyI.vars.x + vecG[Three].x, polyI.vars.y + vecG[Three].y, polyI.vars.x + vecG[Four].x, polyI.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyI.vars.x + vecG[Five].x, polyI.vars.y + vecG[Five].y, polyI.vars.x + vecG[Six].x, polyI.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}




var mask_J = f.toPath("J", 50 + pos*5, 80 + pos2 * 2, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke ljtery B

var l_J = f.toPath("J", 50 + pos*5, 80 + pos2* 2, 100)
.fill(0)
r.stage.add(l_J)

 // konwertuje ja na poljjon

 var polysJ = l_J.toPolygons({ spacing:6 });

 for(var ij = 0; ij < polysJ.length; ij++) {

  var polyJ = polysJ[ij];
  polyJ.move(0, 0, true);

}


for(var jj = 0; jj < polyJ.vars.vectors.length; jj++) {

 var vecG = polyJ.vars.vectors;
 
 var gj = polyJ.vars.vectors.length.toString();
 var lj = gj - 1;

//console.log(polyJ.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lj));
var Two = Math.round(Rune.random(lj));
var Three = Math.round(Rune.random(lj));
var Four = Math.round(Rune.random(lj));
var Five = Math.round(Rune.random(lj));
var Six = Math.round(Rune.random(lj));

r.line( polyJ.vars.x + vecG[One].x, polyJ.vars.y + vecG[One].y, polyJ.vars.x + vecG[Two].x, polyJ.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyJ.vars.x + vecG[Three].x, polyJ.vars.y + vecG[Three].y, polyJ.vars.x + vecG[Four].x, polyJ.vars.y + vecG[Four].y)

.stroke(col)
.strokeWidth(0.2)
r.line( polyJ.vars.x + vecG[Five].x, polyJ.vars.y + vecG[Five].y, polyJ.vars.x + vecG[Six].x, polyJ.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}



////////////////////////////////////////// K ///////////////////////////////////////

var mask_K = f.toPath("k", 10 + pos*13, 80 + pos2 * 2, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lktery B

var l_K = f.toPath("k", 10 + pos*13, 80 + pos2* 2, 100)
.fill(0)
r.stage.add(l_K)

 // konwertuje ja na polkkon

 var polysK = l_K.toPolygons({ spacing:6 });

 for(var ik = 0; ik < polysK.length; ik++) {

  var polyK = polysK[ik];
  polyK.move(0, 0, true);

}


for(var jk = 0; jk < polyK.vars.vectors.length; jk++) {

 var vecG = polyK.vars.vectors;
 
 var gk = polyK.vars.vectors.length.toString();
 var lk = gk - 1;

//console.log(polyK.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lk));
var Two = Math.round(Rune.random(lk));
var Three = Math.round(Rune.random(lk));
var Four = Math.round(Rune.random(lk));
var Five = Math.round(Rune.random(lk));
var Six = Math.round(Rune.random(lk));

r.line( polyK.vars.x + vecG[One].x, polyK.vars.y + vecG[One].y, polyK.vars.x + vecG[Two].x, polyK.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyK.vars.x + vecG[Three].x, polyK.vars.y + vecG[Three].y, polyK.vars.x + vecG[Four].x, polyK.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyK.vars.x + vecG[Five].x, polyK.vars.y + vecG[Five].y, polyK.vars.x + vecG[Six].x, polyK.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}







/////////////////////////////////////////////  L   ////////////////////////////////

var mask_L = f.toPath("l", 90 + pos*15, 80 + pos2 * 2, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lltery B

var l_L = f.toPath("l", 90 + pos*15, 80 + pos2* 2, 100)
.fill(0)
r.stage.add(l_L)

 // konwertuje ja na pollkon

 var polysL = l_L.toPolygons({ spacing:6 });

 for(var il = 0; il < polysL.length; il++) {

  var polyL = polysL[il];
  polyL.move(0, 0, true);

}


for(var jl = 0; jl < polyL.vars.vectors.length; jl++) {

 var vecG = polyL.vars.vectors;
 
 var gl = polyL.vars.vectors.length.toString();
 var ll = gl - 1;

//console.log(polyL.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(ll));
var Two = Math.round(Rune.random(ll));
var Three = Math.round(Rune.random(ll));
var Four = Math.round(Rune.random(ll));
var Five = Math.round(Rune.random(ll));
var Six = Math.round(Rune.random(ll));

r.line( polyL.vars.x + vecG[One].x, polyL.vars.y + vecG[One].y, polyL.vars.x + vecG[Two].x, polyL.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyL.vars.x + vecG[Three].x, polyL.vars.y + vecG[Three].y, polyL.vars.x + vecG[Four].x, polyL.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyL.vars.x + vecG[Five].x, polyL.vars.y + vecG[Five].y, polyL.vars.x + vecG[Six].x, polyL.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}

///////////////////////////////////////  M   ////////////////////////////////



var mask_M = f.toPath("m", 45+pos, 80 + pos2 * 3, 100)
.moveTo(0, 30)
.lineTo(100, 30)
.lineTo(100, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lmtery B

var l_M = f.toPath("m", 45+ pos, 80 + pos2* 3, 100)
.fill(0)
r.stage.add(l_M)

 // konwertuje ja na polmkon

 var polysM = l_M.toPolygons({ spacing:6 });

 for(var im = 0; im < polysM.length; im++) {

  var polyM = polysM[im];
  polyM.move(0, 0, true);

}


for(var jm = 0; jm < polyM.vars.vectors.length; jm++) {

 var vecG = polyM.vars.vectors;
 
 var gm = polyM.vars.vectors.length.toString();
 var lm = gm - 1;

//console.log(polyM.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lm));
var Two = Math.round(Rune.random(lm));
var Three = Math.round(Rune.random(lm));
var Four = Math.round(Rune.random(lm));
var Five = Math.round(Rune.random(lm));
var Six = Math.round(Rune.random(lm));

r.line( polyM.vars.x + vecG[One].x, polyM.vars.y + vecG[One].y, polyM.vars.x + vecG[Two].x, polyM.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyM.vars.x + vecG[Three].x, polyM.vars.y + vecG[Three].y, polyM.vars.x + vecG[Four].x, polyM.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyM.vars.x + vecG[Five].x, polyM.vars.y + vecG[Five].y, polyM.vars.x + vecG[Six].x, polyM.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}



/////////////////////////////////////   N    ////////////////////////////////////


var mask_N = f.toPath("n", 65+pos*6, 80 + pos2 * 3, 100)
.moveTo(0, 30)
.lineTo(60, 30)
.lineTo(60, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lntery B

var l_N = f.toPath("n", 65+ pos*6, 80 + pos2* 3, 100)
.fill(0)
r.stage.add(l_N)

 // konwertuje ja na polnkon

 var polysN = l_N.toPolygons({ spacing:6 });

 for(var inn = 0; inn < polysN.length; inn++) {

  var polyN = polysN[inn];
  polyN.move(0, 0, true);

}


for(var jn = 0; jn < polyN.vars.vectors.length; jn++) {

 var vecG = polyN.vars.vectors;
 
 var gn = polyN.vars.vectors.length.toString();
 var ln = gn - 1;

//console.log(polyN.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(ln));
var Two = Math.round(Rune.random(ln));
var Three = Math.round(Rune.random(ln));
var Four = Math.round(Rune.random(ln));
var Five = Math.round(Rune.random(ln));
var Six = Math.round(Rune.random(ln));

r.line( polyN.vars.x + vecG[One].x, polyN.vars.y + vecG[One].y, polyN.vars.x + vecG[Two].x, polyN.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyN.vars.x + vecG[Three].x, polyN.vars.y + vecG[Three].y, polyN.vars.x + vecG[Four].x, polyN.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyN.vars.x + vecG[Five].x, polyN.vars.y + vecG[Five].y, polyN.vars.x + vecG[Six].x, polyN.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}


///////////////////////////////////    O     /////////////////////////////

var mask_O = f.toPath("o", 50+pos*11, 80 + pos2 * 3, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lotery B

var l_O = f.toPath("o", 50+ pos*11, 80 + pos2* 3, 100)
.fill(0)
r.stage.add(l_O)

 // konwertuje ja na polokon

 var polysO = l_O.toPolygons({ spacing:6 });

 for(var io = 0; io < polysO.length; io++) {

  var polyO = polysO[io];
  polyO.move(0, 0, true);

}


for(var jo = 0; jo < polyO.vars.vectors.length; jo++) {

 var vecG = polyO.vars.vectors;
 
 var go = polyO.vars.vectors.length.toString();
 var lo = go - 1;

//console.log(polyO.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lo));
var Two = Math.round(Rune.random(lo));
var Three = Math.round(Rune.random(lo));
var Four = Math.round(Rune.random(lo));
var Five = Math.round(Rune.random(lo));
var Six = Math.round(Rune.random(lo));

r.line( polyO.vars.x + vecG[One].x, polyO.vars.y + vecG[One].y, polyO.vars.x + vecG[Two].x, polyO.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyO.vars.x + vecG[Three].x, polyO.vars.y + vecG[Three].y, polyO.vars.x + vecG[Four].x, polyO.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyO.vars.x + vecG[Five].x, polyO.vars.y + vecG[Five].y, polyO.vars.x + vecG[Six].x, polyO.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}

//////////////////////////////////////  p   /////////////////////////////
var mask_P = f.toPath("p", 50+pos*16, 80 + pos2 * 3, 100)
.moveTo(0, 30)
.lineTo(100, 30)
.lineTo(100, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lptery B

var l_O = f.toPath("p", 50+ pos*16, 80 + pos2* 3, 100)
.fill(0)
r.stage.add(l_O)

 // konwertuje ja na polpkon

 var polysP = l_O.toPolygons({ spacing:6 });

 for(var io = 0; io < polysP.length; io++) {

  var polyP = polysP[io];
  polyP.move(0, 0, true);

}


for(var jp = 0; jp < polyP.vars.vectors.length; jp++) {

 var vecG = polyP.vars.vectors;
 
 var go = polyP.vars.vectors.length.toString();
 var lp = go - 1;

//console.lpg(polyP.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lp));
var Two = Math.round(Rune.random(lp));
var Three = Math.round(Rune.random(lp));
var Four = Math.round(Rune.random(lp));
var Five = Math.round(Rune.random(lp));
var Six = Math.round(Rune.random(lp));

r.line( polyP.vars.x + vecG[One].x, polyP.vars.y + vecG[One].y, polyP.vars.x + vecG[Two].x, polyP.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyP.vars.x + vecG[Three].x, polyP.vars.y + vecG[Three].y, polyP.vars.x + vecG[Four].x, polyP.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyP.vars.x + vecG[Five].x, polyP.vars.y + vecG[Five].y, polyP.vars.x + vecG[Six].x, polyP.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}


///////////////////////////////////    Q   /////////////////////////////////





var mask_Q = f.toPath("q", 50+pos, 80 + pos2 * 4, 100)
.moveTo(0, 30)
.lineTo(80, 30)
.lineTo(80, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lqtery B

var l_Q = f.toPath("q", 50+ pos, 80 + pos2* 4, 100)
.fill(0)
r.stage.add(l_Q)

 // konwertuje ja na polqkon

 var polysQ = l_Q.toPolygons({ spacing:6 });

 for(var iq = 0; iq < polysQ.length; iq++) {

  var polyQ = polysQ[iq];
  polyQ.move(0, 0, true);

}


for(var jq = 0; jq < polyQ.vars.vectors.length; jq++) {

 var vecG = polyQ.vars.vectors;
 
 var gq = polyQ.vars.vectors.length.toString();
 var lq = gq - 1;

//console.log(polyQ.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lq));
var Two = Math.round(Rune.random(lq));
var Three = Math.round(Rune.random(lq));
var Four = Math.round(Rune.random(lq));
var Five = Math.round(Rune.random(lq));
var Six = Math.round(Rune.random(lq));

r.line( polyQ.vars.x + vecG[One].x, polyQ.vars.y + vecG[One].y, polyQ.vars.x + vecG[Two].x, polyQ.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyQ.vars.x + vecG[Three].x, polyQ.vars.y + vecG[Three].y, polyQ.vars.x + vecG[Four].x, polyQ.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyQ.vars.x + vecG[Five].x, polyQ.vars.y + vecG[Five].y, polyQ.vars.x + vecG[Six].x, polyQ.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}






















////////////////////////////////////     R    /////////////////////////////////



var mask_R = f.toPath("r", 45+pos*7, 80 + pos2 * 4, 100)
.moveTo(0, 30)
.lineTo(50, 30)
.lineTo(50, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lrtery B

var l_R = f.toPath("r", 45+ pos*7, 80 + pos2* 4, 100)
.fill(0)
r.stage.add(l_R)

 // konwertuje ja na polrkon

 var polysR = l_R.toPolygons({ spacing:6 });

 for(var ir = 0; ir < polysR.length; ir++) {

  var polyR = polysR[ir];
  polyR.move(0, 0, true);

}


for(var jr = 0; jr < polyR.vars.vectors.length; jr++) {

 var vecG = polyR.vars.vectors;
 
 var gr = polyR.vars.vectors.length.toString();
 var lr = gr - 1;

//console.log(polyR.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lr));
var Two = Math.round(Rune.random(lr));
var Three = Math.round(Rune.random(lr));
var Four = Math.round(Rune.random(lr));
var Five = Math.round(Rune.random(lr));
var Six = Math.round(Rune.random(lr));

r.line( polyR.vars.x + vecG[One].x, polyR.vars.y + vecG[One].y, polyR.vars.x + vecG[Two].x, polyR.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyR.vars.x + vecG[Three].x, polyR.vars.y + vecG[Three].y, polyR.vars.x + vecG[Four].x, polyR.vars.y + vecG[Four].y)

.stroke(col)
.strokeWidth(0.2)
r.line( polyR.vars.x + vecG[Five].x, polyR.vars.y + vecG[Five].y, polyR.vars.x + vecG[Six].x, polyR.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}

//////////////////////////////////          S      / ///////////////////////////////



var mask_S = f.toPath("s", 95+pos*9, 80 + pos2 * 4, 100)
.moveTo(0, 30)
.lineTo(100, 30)
.lineTo(100, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lstery B

var l_S = f.toPath("s", 95+ pos*9, 80 + pos2* 4, 100)
.fill(0)
r.stage.add(l_S)

 // konwertuje ja na polskon

 var polysS = l_S.toPolygons({ spacing:6 });

 for(var iss = 0; iss < polysS.length; iss++) {

  var polySS = polysS[iss];
  polySS.move(0, 0, true);

}


for(var js = 0; js < polySS.vars.vectors.length; js++) {

 var vecG = polySS.vars.vectors;
 
 var gs = polySS.vars.vectors.length.toString();
 var ls = gs - 1;

//console.log(polySS.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(ls));
var Two = Math.round(Rune.random(ls));
var Three = Math.round(Rune.random(ls));
var Four = Math.round(Rune.random(ls));
var Five = Math.round(Rune.random(ls));
var Six = Math.round(Rune.random(ls));

r.line( polySS.vars.x + vecG[One].x, polySS.vars.y + vecG[One].y, polySS.vars.x + vecG[Two].x, polySS.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polySS.vars.x + vecG[Three].x, polySS.vars.y + vecG[Three].y, polySS.vars.x + vecG[Four].x, polySS.vars.y + vecG[Four].y)

.stroke(col)
.strokeWidth(0.2)
r.line( polySS.vars.x + vecG[Five].x, polySS.vars.y + vecG[Five].y, polySS.vars.x + vecG[Six].x, polySS.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}



//////////////////////////////////////    T       ////////////////////////////



var mask_T = f.toPath("t", 75+pos*15, 80 + pos2 * 4, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lttery B

var l_T = f.toPath("t", 75+ pos*15, 80 + pos2* 4, 100)
.fill(0)
r.stage.add(l_T)

 // konwertuje ja na poltkon

 var polysT = l_T.toPolygons({ spacing:6 });

 for(var itt = 0; itt < polysT.length; itt++) {

  var polyST = polysT[itt];
  polyST.move(0, 0, true);

}


for(var jt = 0; jt < polyST.vars.vectors.length; jt++) {

 var vecG = polyST.vars.vectors;
 
 var gt = polyST.vars.vectors.length.toString();
 var lt = gt - 1;

//console.log(polyST.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lt));
var Two = Math.round(Rune.random(lt));
var Three = Math.round(Rune.random(lt));
var Four = Math.round(Rune.random(lt));
var Five = Math.round(Rune.random(lt));
var Six = Math.round(Rune.random(lt));

r.line( polyST.vars.x + vecG[One].x, polyST.vars.y + vecG[One].y, polyST.vars.x + vecG[Two].x, polyST.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyST.vars.x + vecG[Three].x, polyST.vars.y + vecG[Three].y, polyST.vars.x + vecG[Four].x, polyST.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyST.vars.x + vecG[Five].x, polyST.vars.y + vecG[Five].y, polyST.vars.x + vecG[Six].x, polyST.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}    


//////////////////////////////////    U   ////////////////////////////////

var mask_U = f.toPath("u", 55+pos, 80 + pos2 * 5, 100)
.moveTo(0, 30)
.lineTo(60, 30)
.lineTo(60, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lutery B

var l_U = f.toPath("u", 55+ pos, 80 + pos2* 5, 100)
.fill(0)
r.stage.add(l_U)

 // konwertuje ja na polukon

 var polysU = l_U.toPolygons({ spacing:6 });

 for(var iu = 0; iu < polysU.length; iu++) {

  var polyU = polysU[iu];
  polyU.move(0, 0, true);

}


for(var ju = 0; ju < polyU.vars.vectors.length; ju++) {

 var vecG = polyU.vars.vectors;
 
 var gu = polyU.vars.vectors.length.toString();
 var lu = gu - 1;

//console.log(polyU.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lu));
var Two = Math.round(Rune.random(lu));
var Three = Math.round(Rune.random(lu));
var Four = Math.round(Rune.random(lu));
var Five = Math.round(Rune.random(lu));
var Six = Math.round(Rune.random(lu));

r.line( polyU.vars.x + vecG[One].x, polyU.vars.y + vecG[One].y, polyU.vars.x + vecG[Two].x, polyU.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyU.vars.x + vecG[Three].x, polyU.vars.y + vecG[Three].y, polyU.vars.x + vecG[Four].x, polyU.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyU.vars.x + vecG[Five].x, polyU.vars.y + vecG[Five].y, polyU.vars.x + vecG[Six].x, polyU.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}




/////////////////////////////////////    V    ////////////////////////////


var mask_V = f.toPath("v", 45+pos*6, 80 + pos2 * 5, 100)
.moveTo(0, 30)
.lineTo(60, 30)
.lineTo(60, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lytery B

var l_V = f.toPath("v", 45+ pos*6, 80 + pos2* 5, 100)
.fill(0)
r.stage.add(l_V)

 // konwertuje ja na polykon

 var polysV = l_V.toPolygons({ spacing:6 });

 for(var iv = 0; iv < polysV.length; iv++) {

  var polyV = polysV[iv];
  polyV.move(0, 0, true);

}


for(var jv = 0; jv < polyV.vars.vectors.length; jv++) {

 var vecG = polyV.vars.vectors;
 
 var gv = polyV.vars.vectors.length.toString();
 var ly = gv - 1;

//console.log(polyV.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(ly));
var Two = Math.round(Rune.random(ly));
var Three = Math.round(Rune.random(ly));
var Four = Math.round(Rune.random(ly));
var Five = Math.round(Rune.random(ly));
var Six = Math.round(Rune.random(ly));

r.line( polyV.vars.x + vecG[One].x, polyV.vars.y + vecG[One].y, polyV.vars.x + vecG[Two].x, polyV.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyV.vars.x + vecG[Three].x, polyV.vars.y + vecG[Three].y, polyV.vars.x + vecG[Four].x, polyV.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyV.vars.x + vecG[Five].x, polyV.vars.y + vecG[Five].y, polyV.vars.x + vecG[Six].x, polyV.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}



/////////////////////////////////////    W     //////////////////////////////////

var mask_W = f.toPath("w", 55+pos*10, 80 + pos2 * 5, 100)
.moveTo(0, 30)
.lineTo(110, 30)
.lineTo(110, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lwtery B

var l_W = f.toPath("w", 55+ pos*10, 80 + pos2* 5, 100)
.fill(0)
r.stage.add(l_W)

 // konwertuje ja na polwkon

 var polwsW = l_W.toPolygons({ spacing:6 });

 for(var iw = 0; iw < polwsW.length; iw++) {

  var polyW = polwsW[iw];
  polyW.move(0, 0, true);

}


for(var jw = 0; jw < polyW.vars.vectors.length; jw++) {

 var vecG = polyW.vars.vectors;
 
 var gw = polyW.vars.vectors.length.toString();
 var lw = gw - 1;

//console.log(polyW.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lw));
var Two = Math.round(Rune.random(lw));
var Three = Math.round(Rune.random(lw));
var Four = Math.round(Rune.random(lw));
var Fiwe = Math.round(Rune.random(lw));
var Six = Math.round(Rune.random(lw));

r.line( polyW.vars.x + vecG[One].x, polyW.vars.y + vecG[One].y, polyW.vars.x + vecG[Two].x, polyW.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyW.vars.x + vecG[Three].x, polyW.vars.y + vecG[Three].y, polyW.vars.x + vecG[Four].x, polyW.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyW.vars.x + vecG[Fiwe].x, polyW.vars.y + vecG[Fiwe].y, polyW.vars.x + vecG[Six].x, polyW.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}


/////////////////////////////////////    X      ///////////////////////////////

var mask_X = f.toPath("x", 65+pos*15, 80 + pos2 * 5, 100)
.moveTo(0, 30)
.lineTo(70, 30)
.lineTo(70, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lxtery B

var l_X = f.toPath("x", 65+ pos*15, 80 + pos2* 5, 100)
.fill(0)
r.stage.add(l_X)

 // konwertuje ja na polxkon

 var polysX = l_X.toPolygons({ spacing:6 });

 for(var ix = 0; ix < polysX.length; ix++) {

  var polyX = polysX[ix];
  polyX.move(0, 0, true);

}


for(var jx = 0; jx < polyX.vars.vectors.length; jx++) {

 var vecG = polyX.vars.vectors;
 
 var gx = polyX.vars.vectors.length.toString();
 var lx = gx - 1;

//console.log(polyX.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lx));
var Two = Math.round(Rune.random(lx));
var Three = Math.round(Rune.random(lx));
var Four = Math.round(Rune.random(lx));
var Five = Math.round(Rune.random(lx));
var Six = Math.round(Rune.random(lx));

r.line( polyX.vars.x + vecG[One].x, polyX.vars.y + vecG[One].y, polyX.vars.x + vecG[Two].x, polyX.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyX.vars.x + vecG[Three].x, polyX.vars.y + vecG[Three].y, polyX.vars.x + vecG[Four].x, polyX.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyX.vars.x + vecG[Five].x, polyX.vars.y + vecG[Five].y, polyX.vars.x + vecG[Six].x, polyX.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}


////////////////////////////////////    Y    ///////////////////////////////////

var mask_Y = f.toPath("y", 55+pos, 80 + pos2 * 6, 100)
.moveTo(0, 30)
.lineTo(60, 30)
.lineTo(60, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lytery B

var l_Y = f.toPath("y", 55+ pos, 80 + pos2* 6, 100)
.fill(0)
r.stage.add(l_Y)

 // konwertuje ja na polykon

 var polysY = l_Y.toPolygons({ spacing:6 });

 for(var iy = 0; iy < polysY.length; iy++) {

  var polyYYY = polysY[iy];
  polyYYY.move(0, 0, true);

}


for(var jy = 0; jy < polyYYY.vars.vectors.length; jy++) {

 var vecG = polyYYY.vars.vectors;

 console.log(polyYYY.vars.x )
 
 var gy = polyYYY.vars.vectors.length.toString();
 var ly = gy - 1;

//console.log(polyYYY.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(ly));
var Two = Math.round(Rune.random(ly));
var Three = Math.round(Rune.random(ly));
var Four = Math.round(Rune.random(ly));
var Five = Math.round(Rune.random(ly));
var Six = Math.round(Rune.random(ly));

r.line( polyYYY.vars.x + vecG[One].x, polyYYY.vars.y + vecG[One].y, polyYYY.vars.x + vecG[Two].x, polyYYY.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polyYYY.vars.x + vecG[Three].x, polyYYY.vars.y + vecG[Three].y, polyYYY.vars.x + vecG[Four].x, polyYYY.vars.y + vecG[Four].y)

.stroke(col)
.strokeWidth(0.2)
r.line( polyYYY.vars.x + vecG[Five].x, polyYYY.vars.y + vecG[Five].y, polyYYY.vars.x + vecG[Six].x, polyYYY.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}


/////////////////////////////////  Z   ////////////////////////////////////

var mask_Z = f.toPath("z", 45+pos*6, 80 + pos2 * 6, 100)
.moveTo(0, 30)
.lineTo(60, 30)
.lineTo(60, -80)
.lineTo(0,-90)
.fill(0).stroke(false)
.closePath()



// tu mam sciezke lztery B

var l_Z = f.toPath("z", 45+ pos*6, 80 + pos2* 6, 100)
.fill(0)
r.stage.add(l_Z)

 // konwertuje ja na polzkon

 var polzsZ = l_Z.toPolygons({ spacing:6 });

 for(var iz = 0; iz < polzsZ.length; iz++) {

  var polzYZ = polzsZ[iz];
  polzYZ.move(0, 0, true);

}


for(var jz = 0; jz < polzYZ.vars.vectors.length; jz++) {

 var vecG = polzYZ.vars.vectors;

 console.log(polzYZ.vars.x )
 
 var gz = polzYZ.vars.vectors.length.toString();
 var lz = gz - 1;

//console.log(polzYZ.vars.vectors.length)
// rysuje random linie z punktow wektorow z mojego array

var One = Math.round(Rune.random(lz));
var Two = Math.round(Rune.random(lz));
var Three = Math.round(Rune.random(lz));
var Four = Math.round(Rune.random(lz));
var Five = Math.round(Rune.random(lz));
var Six = Math.round(Rune.random(lz));

r.line( polzYZ.vars.x + vecG[One].x, polzYZ.vars.y + vecG[One].y, polzYZ.vars.x + vecG[Two].x, polzYZ.vars.y + vecG[Two].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polzYZ.vars.x + vecG[Three].x, polzYZ.vars.y + vecG[Three].y, polzYZ.vars.x + vecG[Four].x, polzYZ.vars.y + vecG[Four].y)
.stroke(col)
.strokeWidth(0.2)
r.line( polzYZ.vars.x + vecG[Five].x, polzYZ.vars.y + vecG[Five].y, polzYZ.vars.x + vecG[Six].x, polzYZ.vars.y + vecG[Six].y)

.stroke(col)
.strokeWidth(0.2) ;

}


r.stage.add(mask_A)
r.stage.add(mask_B)
r.stage.add(mask_C)
r.stage.add(mask_D)
r.stage.add(mask_E)
r.stage.add(mask_F)
r.stage.add(mask_G)
r.stage.add(mask_H)
r.stage.add(mask_I)
r.stage.add(mask_J)
r.stage.add(mask_K)
r.stage.add(mask_L)
r.stage.add(mask_M)
r.stage.add(mask_N)
r.stage.add(mask_O)
r.stage.add(mask_P)
r.stage.add(mask_Q)
r.stage.add(mask_R)
r.stage.add(mask_S)
r.stage.add(mask_T)
r.stage.add(mask_U)
r.stage.add(mask_V)
r.stage.add(mask_W)
r.stage.add(mask_X)
r.stage.add(mask_Y)
r.stage.add(mask_Z)





r.rect ( 56,300, 150, 10)
.stroke(false)
.fill(0)
r.rect ( 56,280, 150, 10)

.fill(0)
.stroke(false)



r.draw();
});
