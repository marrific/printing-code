var r = new Rune({
	container: "#canvas",
	width: 1200,
	height: 1400,
	debug: false
});

r.rect(0,0,r.width,r.height).fill(0,0,90)

var lines = [

[5, 1, 5, 6],
[0,6, 4, 6],
[2,3, 2, 7],
[7,20,7,20],
[9,8, 9, 11],
[4,20,4,20],
[4,22, 4, 22],
[4,24, 4, 24],


]


var lines2 = 
[


[3, 5, 6, 5],
[1, 10, 3, 11],
[10, 8, 10, 10],
[2, 18, 6, 18],
[3, 17, 3, 22],
[8,12,8,12],
[9,27,9,27],
[6,24,9,24],
[6,15,7,15]
]


var lines3 = [           /////////////////  RED


[3, 0, 6, 0],
[1, 10, 3, 11],
[4,21,4,21],
[4,23,4,23],
[4,25,4,25],
[4,19,4,19],
[2,16,2,21],
[11,5,12,5],
[9,3,11,3],
[8,1,11,1],
[9,13,9,14],
[11,25,11,25]
]   


var lines4 = [


[3, 4, 4, 5],
[10,27,11,27],
[0,7,0,10],
[2,7,2,10],
[4,7,4,10],
[6,7,6,10],
[0,26,7,26],
[0,24,3,24],
[0,22,2,22],
[0,20,1,20],
[10,20,10,20],
[10,22,10,22],
[13,20,13,20],
[13,22,12,22],
[10,24,10,24],
[10,26,10,26],
[4,11,4,11]
]


var lines5 = [


[1, 7, 1, 9],
[3, 7, 3, 9],
[5, 7, 5, 9],
[0,0,2,0],
[4,4,4,4],
[9,12,9,12],
[11,13,11,14],
[11,16,11,17],
[11,20,11,21],
[14,17,19,17]

]


var lines6 = [


[2, 7, 2, 9],
[4, 7, 4, 9],
[6, 7, 6, 9],

]


var lines7 = [

[1, 15, 3, 15],
[3, 15, 3, 15],
[3, 1, 4, 3],
[3,12,6,12],
[5,17,5,17],
[5,19,5,20],
[8,13,8,15],
[9,18,9,18]




]

var lines8 = [          

[0, 21, 1, 21],
[0, 23, 3, 23],
[0, 25, 6, 25],
[0, 27, 8, 27],

]

var lines9 = [          

[1,16,1,19],
[6,6,7,6],
[9,6,9,6],
[11,6,11,6],
[11,8,12,12],


]


var lines10 = [          

[7,7,9,7],
[10,11,10,14],
[10,7,11,7],
[0,2,2,2],
[6,4,6,4],
[1,12,1,13],
[2,14,2,14],
[5,10,5,10],
[7,18,7,19],
[11,23,11,23]


]

var lines11 = [          

[0,17,0,19],
[8,8,8,11],
[6,1,6,3],
[2,1,2,1],
[19,15,19,15],
[20,14,20,14],
[22,14,22,14],
[21,13,21,13],
[5,11,6,11],
[15,18,15,19]
]


var lines12 = [          

[7,0,16,0],
[9,2,14,2],
[11,4,11,4],
[8,6,8,6],
[10,6,10,6],
[5,21,5,24],
[8,26,8,26],
[0,3,0,3],
[0,5,0,5],
[1,4,1,4],


]

var lines13 = [          

[11,15,11,15],
[11,18,11,19],
[0,11,0,16],
[0,1,2,1],
[1,3,1,3],
[0,4,0,4],
[1,5,1,5],
[2,26,2,27],
[4,26,4,27],
[6,26,6,27],
[11,26,12,26],
[7,11,7,13]
]

var lines14 = [          

[7,5,10,5],
[6,1,6,3],
[4,13,6,13],
[9,20,9,23]

]

var lines15 = [          

[7,1,7,4],
[10,15,10,19],
[4,25,4,25],
[5,26,5,26],
[9,26,9,26],
[7,26,7,26],
[22,26,11,26],
[2,12,2,12],
[3,13,3,13],
[4,14,4,14],
[5,15,5,15]

]


var lines16 = [          

[8,2,8,4],
[8,4,10,4],
[7,8,7,10],

[10,21,10,21],
[10,23,10,23],
[10,25,10,25]


]

var lines17 = [          

[16,25,16,25],
[17,25,17,25],
[6,23,7,23],
[6,21,6,23],
[0,23,0,23],
[2,23,2,23],
[11,22,11,22]




]

var lines18 = [

[10,18,10,18],
[9,19,9,19],
[8,20,8,20],
[7,21,7,21],
[14,15,14,16],
[2,8,2,8],
[4,8,4,8],
[6,8,6,8],
[0,27,0,27],
[6,19,6,20]



]


var lines19 = [

[3,16,8,16],
[7,22,7,22],
[8,23,8,23],
[7,14,7,14]



]

var lines20 = [

[8,25,9,25],
[11,24,11,24],
[15,21,15,22],
[17,14,18,14],
[16,9,16,9],
[20,27,20,27]



]



var gridSize =50;

for(var y = 0; y < r.height; y += gridSize) {
	for(var x = 0; x < r.width; x += gridSize) {

		var col = y / gridSize;
		var row = x / gridSize;

		var substract = r.width/gridSize -1

		var fillNavy = false;
		var fillAqua = false;
		var fillRed = false;
		var fillDarkNavy = false;
		var lightYellow = false;
		var raspberry = false;
		var orangeMedium = false;
		var orangeDark = false;
		var paleRed = false;
		var mediumBlue = false;
		var sunny = false;
		var darkRed = false;
		var darkMalina = false;
		var nyu = false;
		var darkViolet = false;
		var lightViolet = false;
		var niceBlue = false;
		var pinky = false;
		var oczojebny = false;
		var weirdblue = false;




		for(var i = 0; i < lines.length ; i++) {
			if(col >= lines[i][1] && col <= lines[i][3] && row >= lines[i][0] && row <= lines[i][2]) {
				fillNavy = true;
			}
			if(col >= lines[i][1] && col <= lines[i][3] && substract - row >= lines[i][0] && substract - row <= lines[i][2]) {
				fillNavy = true;
			}
		}


/////////////////////////////////////// SECOND COLOR ////////////////////////////////////////


for(var g = 0; g < lines2.length ; g++) {
	if(col >= lines2[g][1] && col <= lines2[g][3] && row >= lines2[g][0] && row <= lines2[g][2]) {
		fillAqua = true;
	}
	if(col >= lines2[g][1] && col <= lines2[g][3] && substract - row >= lines2[g][0] && substract - row <= lines2[g][2]) {
		fillAqua = true;
	}
}

//////////////////////////////////////// THIRD COLOR ////////////////////////////////////////

for(var d = 0; d < lines3.length ; d++) {
	if(col >= lines3[d][1] && col <= lines3[d][3] && row >= lines3[d][0] && row <= lines3[d][2]) {
		fillRed = true;
	}
	if(col >= lines3[d][1] && col <= lines3[d][3] && substract - row >= lines3[d][0] && substract - row <= lines3[d][2]) {
		fillRed = true;
	}
}

/////////////////////////////////////// FOURTH COLOR /////////////////////////////////////////////


for(var n = 0; n < lines4.length ; n ++) {
	if(col >= lines4[n][1] && col <= lines4[n][3] && row >= lines4[n][0] && row <= lines4[n][2]) {
		fillDarkNavy = true;
	}
	if(col >= lines4[n][1] && col <= lines4[n][3] && substract - row >= lines4[n][0] && substract - row <= lines4[n][2]) {
		fillDarkNavy = true;
	}
}


/////////////////////////////////// RASPBERRY //////////////////////////

for(var z = 0; z < lines5.length ; z++) {
	if(col >= lines5[z][1] && col <= lines5[z][3] && row >= lines5[z][0] && row <= lines5[z][2]) {
		raspberry = true;
	}
	if(col >= lines5[z][1] && col <= lines5[z][3] && substract - row >= lines5[z][0] && substract - row <= lines5[z][2]) {
		raspberry = true;
	}
}

///////////////////////////////   DARK ORANGE ////////////////////////


for(var h = 0; h < lines6.length ; h++) {
	if(col >= lines6[h][1] && col <= lines6[h][3] && row >= lines6[h][0] && row <= lines6[h][2]) {
		orangeDark = true;
	}
	if(col >= lines6[h][1] && col <= lines6[h][3] && substract - row >= lines6[h][0] && substract - row <= lines6[h][2]) {
		orangeDark = true;
	}
}


///////////////////////////////   PALE RED ////////////////////////


for(var o = 0; o < lines7.length ; o++) {
	if(col >= lines7[o][1] && col <= lines7[o][3] && row >= lines7[o][0] && row <= lines7[o][2]) {
		paleRed = true;
	}
	if(col >= lines7[o][1] && col <= lines7[o][3] && substract - row >= lines7[o][0] && substract - row <= lines7[o][2]) {
		paleRed = true;
	}
}

///////////////////////////////   MEDIUM BLUE  ////////////////////////



for(var f = 0; f < lines8.length ; f++) {
	if(col >= lines8[f][1] && col <= lines8[f][3] && row >= lines8[f][0] && row <= lines8[f][2]) {
		mediumBlue = true;
	}
	if(col >= lines8[f][1] && col <= lines8[f][3] && substract - row >= lines8[f][0] && substract - row <= lines8[f][2]) {
		mediumBlue = true;
	}
}


/////////////////////////////////////  MEDIUM ORANGE   /////////////////////////


for(var v = 0; v < lines9.length ; v++) {
	if(col >= lines9[v][1] && col <= lines9[v][3] && row >= lines9[v][0] && row <= lines9[v][2]) {
		orangeMedium = true;
	}
	if(col >= lines9[v][1] && col <= lines9[v][3] && substract - row >= lines9[v][0] && substract - row <= lines9[v][2]) {
		orangeMedium = true;
	}
}

//////////////////////////////////////////// PALE YELLOW //////////////////////////////////////////////////////////

for(var t = 0; t < lines10.length ; t++) {
	if(col >= lines10[t][1] && col <= lines10[t][3] && row >= lines10[t][0] && row <= lines10[t][2]) {
		lightYellow = true;
	}
	if(col >= lines10[t][1] && col <= lines10[t][3] && substract - row >= lines10[t][0] && substract - row <= lines10[t][2]) {
		lightYellow = true;
	}
}


//////////////////////////////////////  SUNNY ///////////////////////////


for(var ss = 0; ss < lines11.length ; ss++) {
	if(col >= lines11[ss][1] && col <= lines11[ss][3] && row >= lines11[ss][0] && row <= lines11[ss][2]) {
		sunny = true;
	}
	if(col >= lines11[ss][1] && col <= lines11[ss][3] && substract - row >= lines11[ss][0] && substract - row <= lines11[ss][2]) {
		sunny = true;
	}
}


//////////////////////////////////  DARK RED   //////////////////////////

for(var so = 0; so < lines12.length ; so++) {
	if(col >= lines12[so][1] && col <= lines12[so][3] && row >= lines12[so][0] && row <= lines12[so][2]) {
		darkRed = true;
	}
	if(col >= lines12[so][1] && col <= lines12[so][3] && substract - row >= lines12[so][0] && substract - row <= lines12[so][2]) {
		darkRed = true;
	}
}

////////////////////////////////  DARK MALINA  /////////////////////

for(var rx = 0; rx < lines13.length ; rx++) {
	if(col >= lines13[rx][1] && col <= lines13[rx][3] && row >= lines13[rx][0] && row <= lines13[rx][2]) {
		darkMalina = true;
	}
	if(col >= lines13[rx][1] && col <= lines13[rx][3] && substract - row >= lines13[rx][0] && substract - row <= lines13[rx][2]) {
		darkMalina = true;
	}
}



///////////////////    NYU    ///////////////////////////////


for(var ny = 0; ny < lines14.length ; ny++) {
	if(col >= lines14[ny][1] && col <= lines14[ny][3] && row >= lines14[ny][0] && row <= lines14[ny][2]) {
		nyu = true;
	}
	if(col >= lines14[ny][1] && col <= lines14[ny][3] && substract - row >= lines14[ny][0] && substract - row <= lines14[ny][2]) {
		nyu = true;
	}
}

//////////////////////    DARK VIOLET  ////////////////////////


for(var np = 0; np < lines15.length ; np++) {
	if(col >= lines15[np][1] && col <= lines15[np][3] && row >= lines15[np][0] && row <= lines15[np][2]) {
		darkViolet = true;
	}
	if(col >= lines15[np][1] && col <= lines15[np][3] && substract - row >= lines15[np][0] && substract - row <= lines15[np][2]) {
		darkViolet = true;
	}
}

/////////////////////////////////////    LIGHT VIOLET   /////////////

for(var ll = 0; ll < lines16.length ; ll++) {
	if(col >= lines16[ll][1] && col <= lines16[ll][3] && row >= lines16[ll][0] && row <= lines16[ll][2]) {
		lightViolet = true;
	}
	if(col >= lines16[ll][1] && col <= lines16[ll][3] && substract - row >= lines16[ll][0] && substract - row <= lines16[ll][2]) {
		lightViolet = true;
	}
}

/////////////////////////////////////    LIGHT YELLOW ///////////////


for(var lk = 0; lk < lines17.length ; lk++) {
	if(col >= lines17[lk][1] && col <= lines17[lk][3] && row >= lines17[lk][0] && row <= lines17[lk][2]) {
		niceBlue = true;
	}
	if(col >= lines17[lk][1] && col <= lines17[lk][3] && substract - row >= lines17[lk][0] && substract - row <= lines17[lk][2]) {
		niceBlue = true;
	}
}


////////////////////////////////////////   PINKY ////////////////////////

for(var ho = 0; ho < lines18.length ; ho++) {
	if(col >= lines18[ho][1] && col <= lines18[ho][3] && row >= lines18[ho][0] && row <= lines18[ho][2]) {
		pinky = true;
	}
	if(col >= lines18[ho][1] && col <= lines18[ho][3] && substract - row >= lines18[ho][0] && substract - row <= lines18[ho][2]) {
		pinky = true;
	}
}


////////////////////////////////////// OCZOJEBNY  ///////////////////


for(var hu = 0; hu < lines19.length ; hu++) {
	if(col >= lines19[hu][1] && col <= lines19[hu][3] && row >= lines19[hu][0] && row <= lines19[hu][2]) {
		oczojebny = true;
	}
	if(col >= lines19[hu][1] && col <= lines19[hu][3] && substract - row >= lines19[hu][0] && substract - row <= lines19[hu][2]) {
		oczojebny = true;
	}
}

///////////////////////////// WEIRD BLUE //////////////////////

for(var kok = 0; kok < lines20.length ; kok++) {
	if(col >= lines20[kok][1] && col <= lines20[kok][3] && row >= lines20[kok][0] && row <= lines20[kok][2]) {
		weirdblue = true;
	}
	if(col >= lines20[kok][1] && col <= lines20[kok][3] && substract - row >= lines20[kok][0] && substract - row <= lines20[kok][2]) {
		weirdblue = true;
	}
}
////////////////////////





	var col1 = new Rune.Color(242,Rune.random(21,44),58); // ciemni rozowo-czews
	var col2 = new Rune.Color(255,110,Rune.random(92,120)); //jasniejsyy losos
	var col3 = new Rune.Color(255,255,255); //bialy
	var col4 = new Rune.Color(74,Rune.random(217,240),217); ///morski jasny
	var col5 = new Rune.Color(0,Rune.random(150,177),191); //aqua
	var col6 = new Rune.Color(21,67,Rune.random(89,220)); // granat
	var col7 = new Rune.Color(3,3,Rune.random(41,66)); // granat ciemny
	var col8 = new Rune.Color(230,0,22); // granat ciemny
   var col9 = new Rune.Color(255,Rune.random(170,250),194); // light yellow
   var col10 = new Rune.Color(Rune.random(220,250),148,10); //orange medium
   var col11 = new Rune.Color(250,119,37); // orange dark
   var col12 = new Rune.Color(Rune.random(220,250),20,128);//raspberry
   var col13 = new Rune.Color(233,84,69);  //paler red
   var col14 = new Rune.Color(50,Rune.random(105,160),Rune.random(147,190)); 
   var col15 = new Rune.Color(254,197,0);   //sunny
   var col16 = new Rune.Color(Rune.random(133,189),11,7);   //DARK RED
   var col17 = new Rune.Color(174,23,Rune.random(105,200));   // DARK MALINA
   var col18 = new Rune.Color(Rune.random(148,180),88,248); // nyu
   var col19 = new Rune.Color(88,48,156); // darkViolet
   var col20 = new Rune.Color(213,Rune.random(148,190),220); //light violet
   var col21 = new Rune.Color(68,Rune.random(150,190),255);  // niceBlue
   var col22 = new Rune.Color(246,Rune.random(98,130),162);   // pinky
   var col23 = new Rune.Color(Rune.random(20,111),197,255);// OCZOJEBNY
      var col24 = new Rune.Color(178,Rune.random(230,250),255);   //weirdblue


        //var
        var rectangle = r.rect(x, y, gridSize, gridSize).stroke(false)//rotate(45,r.width/2,r.height/2)


        // r.text([x/50],x, y-15).fontSize(20).fill(255,255,255).stroke(false)
        // r.text([y/50-1],x+15, y).stroke(false).fontSize(20).fill(255,255,0)
        if(fillNavy) {
        	rectangle.fill(col6)	
        }

        if(fillAqua) {
        	rectangle.fill(col5)	
        }

        if(fillRed) {
        	rectangle.fill(col8)	
        }

        if(fillDarkNavy) {
        	rectangle.fill(col7)	
        }

        if(lightYellow) {
        	rectangle.fill(col9)	
        }

        if(orangeMedium) {
        	rectangle.fill(col10)	
        }

        if(orangeDark) {
        	rectangle.fill(col11)	
        }

        if(raspberry) {
        	rectangle.fill(col12)	
        }

        if(paleRed) {
        	rectangle.fill(col13)	
        }

        if(mediumBlue) {
        	rectangle.fill(col14).stroke(false)	
        }

        if(sunny) {
        	rectangle.fill(col15)	
        }

        if(darkRed) {
        	rectangle.fill(col16)	
        }

        if(darkMalina) {
        	rectangle.fill(col17)	
        }

        if(nyu) {
        	rectangle.fill(col18)	
        }

        if(darkViolet) {
        	rectangle.fill(col19)	
        }

        if(lightViolet) {
        	rectangle.fill(col20)	
        }

        if(niceBlue) {
        	rectangle.fill(col21)	
        }

        if(pinky) {
        	rectangle.fill(col22)	
        }
        if(oczojebny) {
        	rectangle.fill(col23)	
        }

        if (weirdblue){
        	rectangle.fill(col24)	
        }

    }
}



var grid1 = r.grid({
	x: 0,
	y: 0,
	width: r.width,
	height: r.height,
	gutter: 0,
	columns: r.width/50,
	rows: r.height/50
});

var poaaa = r.rect(0,0,100,50).fill(255,100,192).stroke(false);

var smTri = r.triangle(0,0,100,0,50,50).fill(255,222,0).stroke(false);
var smTria = r.triangle(0,0,100,0,50,50).fill(255,222,0).stroke(false);
var smTriad = r.triangle(0,0,100,0,50,50).fill(255,140,277).stroke(false);
var smTriada = r.triangle(0,0,200,0,100,100).fill(0,0,78).stroke(false);
var smTriadaa = r.triangle(100,0,200,0,200,-100).fill(250,145,145).stroke(false);
var smTriadaaa = r.triangle(0,0,200,0,100,100).fill(0,0,78).stroke(false);
var sm = r.triangle(0,0,0,50,50,50).fill(173,228,255).stroke(false);
var sma = r.triangle(0,0,0,50,50,50).fill(173,228,255).stroke(false);
var smaa = r.triangle(0,0,0,50,50,50).fill(173,228,255).stroke(false);
var ok = r.triangle(0,0,0,100,100,100).fill(173,228,255).stroke(false);
var okkr = r.triangle(0,0,0,-100,-100,-100).fill(255,242,148).stroke(false);
var oa = r.triangle(0,0,0,-100,-100,-100).fill(149,23,23).stroke(false);
var lala = r.triangle(50,50,0,50,50,0).fill(64,100,Rune.random(200,250)).stroke(false);
var lalaa = r.triangle(50,50,0,50,50,0).fill(64,100,Rune.random(200,250)).stroke(false);
var lalaaa = r.triangle(0,50,50,50,0,0).fill(64,100,Rune.random(200,250)).stroke(false);

var rectB = r.rect(0,0,50,150).fill(173,228,255).stroke(false);
var rectA = r.rect(0,0,200,50).fill(30,73,95).stroke(false);
var k =r.rect(0,0,50,100).fill(221,90,23).stroke(false);
var weird = r.triangle(50,0,0,-50,100,-50).fill(144,29,182).stroke(false);
//var weird2 =r.triangle(0,0,50,-50,100,0).fill(144,29,182,0.8).stroke(false);
var psjf = r.rect(0,0,50,200).fill(18,35,66).stroke(false);
var momo = r.rect(0,0,50,150).fill(18,35,66).stroke(false);
var momoo = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var momooo = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var momoooo = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var we = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var wee = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var weee = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var weeee = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var weeeee = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var weeeeee = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var weeeeeee = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var weeeeeeee = r.rect(0,0,50,50).fill(32,80,168).stroke(false);
var li = r.triangle(0,0,0,50,50,50).fill(0,93,111).stroke(false);
var lii = r.triangle(50,0,50,50,0,50).fill(223,97,107).stroke(false);
var liii = r.triangle(0,50,50,50,0,0).fill(223,97,107).stroke(false);
var liiii = r.triangle(0,100,100,100,0,0).fill(198,125,240).stroke(false);
var liiiii = r.triangle(0,100,100,100,0,0).fill(0,0,57).stroke(false);
var poa = r.rect(0,0,100,50).fill(255,131,192).stroke(false);
var poaa = r.rect(0,0,100,50).fill(255,100,192).stroke(false);



grid1.add(poaaa,0, 2)

grid1.add(smTri,12,10)
grid1.add(smTria,12,13)
grid1.add(smTriad,12,16)
grid1.add(smTriada,2,22)
grid1.add(smTriadaa,11,22)
grid1.add(smTriadaaa,20,22)
grid1.add(rectB,9,19)
grid1.add(rectA,20,25)
grid1.add(sm,21  ,17)
grid1.add(sma,21  ,19)
grid1.add(smaa,21  ,21)
grid1.add(okkr,10 ,10)
grid1.add(oa,16 ,5)
grid1.add(lala,9 ,17)
grid1.add(lalaa,7 ,17)
grid1.add(lalaaa,5 ,17)
grid1.add(weird,6 ,6)
//grid1.add(weird2,6 ,5)
grid1.add(psjf,7 ,20)
grid1.add(momo,7 ,25)
grid1.add(momoo,7 ,21)
grid1.add(momooo,7 ,23)
grid1.add(momoooo,7 ,26)
grid1.add(we,13, 27)
grid1.add(wee,12, 28)
grid1.add(weee,14, 26)
grid1.add(weeee,15, 25)
grid1.add(weeeee,16, 24)
grid1.add(weeeeee,17, 23)
grid1.add(weeeeeee,18, 22)
grid1.add(weeeeeeee,19, 21)
grid1.add(li,17, 25)
grid1.add(lii,19, 25)
grid1.add(liii,19, 24)
grid1.add(liiii,17, 3)
grid1.add(liiiii,0, 27)
grid1.add(poa,22, 8)
grid1.add(poaa,22, 9)


r.rect(0,50,100,50).fill(202,6,103).stroke(false)
r.rect(400,1350,200,50).fill(88,65,202).stroke(false)



myGroup1 = r.group(1150,450);

for ( i = 0; i < 600; i+=250) {

r.triangle(50,50+i,0,0+i,50,-50+i,myGroup1).stroke(false).fill(Rune.random(161,250),88,178)

}



// myGroup1 = r.group(900,1000);
// for (p = 0; p < 200; p +=100) {
// var weird = r.triangle(50+p,0,0+p,-50,100+p,-50,myGroup1).fill(255,231,32).stroke(false);
// var weird2 =r.triangle(0+p,-50,50+p,-100,100+p,-50,myGroup1).fill(144,29,182,0.8).stroke(false);






// // Moje kolory //////




// 	var rect = r.rect(0, 0 , colW, colH*7).fill(col1); 
// 	grid1.add(rect,7,1);
// 	var rect2 = r.rect(0, 0 , colW*7, colH).fill(col1); 
// 	grid1.add(rect2,0,7);


// 	var rect = r.rect(0, 0 , colW, colH*11).fill(col1); 
// 	grid1.add(rect,3,3);
// 	var rect2 = r.rect(0, 0 , colW*3, colH).fill(col1); 
// 	grid1.add(rect2,0,13);
// 	// console.log(rect)

// 	// var rect3 = r.rect(0, 0 , colW, colH*7).fill(col1); 
// 	// grid1.add(rect,7 ,colNum - 6);
// 	// var rect4 = r.rect(0, 0 , colW, colH*7).fill(col1); 
// 	// grid1.add(rect2,7,colNum);
// 	//console.log(rect)


// }

// griddd(myGroup);







// for(var i = 0; i < grid1.modules.length; i+=2) {
// 	//for(var j = 0; j < grid1.modules.length; j+=5) {



//   //r.rect(0, 0, grid1.vars.moduleWidth, grid1.vars.moduleHeight, grid1.modules[i -14])
//   //.fill(color);
//     r.rect(0, 0, grid1.vars.moduleWidth, grid1.vars.moduleHeight, grid1.modules[i -40])
//    .fill(color);
//   //r.rect(0,0, size).fill(color)
// }




r.draw();