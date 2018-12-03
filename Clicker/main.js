function update() {
// Title counter
	document.title = cookiecount + " DPS";
// Gold Counter
	document.getElementById('goldCount').innerHTML = "Gold " + cookiecount;
// Doran's Blade counter
	document.getElementById('ammountDoranBlade').innerHTML = "You own " + doranBlade + " Doran's Blades";
	document.getElementById('costDoranBlade').innerHTML = ((doranBlade+1) * 12) + " Gold";
// Long Sword counter
	document.getElementById('ammountLongSword').innerHTML = "You own " + longSwords + " Long Swords";
	document.getElementById('costLongSword').innerHTML = ((longSwords+1) * 15 + " Gold");
// DPS Counter
	document.getElementById('dps').innerHTML = + (((doranBlade)+ (longSwords*2))*multiplier) + " DPS";
// Damage per click (AD)
	document.getElementById('adCount').innerHTML = "AD " + (adCount);
}
// Variables
var multiplier = 1;
var cookiecount = 0;
var doranBlade = 0;
var longSwords = 0;
var adCount = 1;

// Every click adds 1 gold
function add() {
	cookiecount = cookiecount + 1
	update()
}
// DPS Increment per upgrade
function timer() {
	cookiecount = cookiecount + doranBlade;
	cookiecount = cookiecount + longSwords*2;
	update()
}
setInterval(timer, 1000)
// Save & Load
function save() {
	localStorage.setItem("cookiecount", cookiecount);
	localStorage.setItem("doranBlade", doranBlade);
	localStorage.setItem("longSwords", longSwords);
}
function load() {
	cookiecount = localStorage.getItem("cookiecount");
	cookiecount = parseInt(cookiecount);
	doranBlade = localStorage.getItem("doranBlade");
	doranBlade = parseInt(doranBlade);
	longSwords = localStorage.getItem("longSwords");
	longSwords = parseInt(longSwords);
	update()
}
// Upgrades
	// Doran's Blade
function buyDoranBlade() {
	if (cookiecount >= ((doranBlade+1) * 12)) {
		cookiecount = cookiecount - ((doranBlade+1) * 12);
		doranBlade = doranBlade + 1;
		update()
	}
}
	// Long Sword
function buyLongSword() {
	if (cookiecount >= ((longSwords+1) * 15)) {
		cookiecount = cookiecount - ((longSwords+1) * 15);
		longSwords = longSwords + 1;
		update()
	}
}
function random_imglink(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="shit/teemo.png"
myimages[2]="shit/teemo.png"
myimages[3]="shit/teemo.png"
myimages[4]="shit/teemo.png"
myimages[5]="shit/teemo.png"
myimages[6]="shit/teemo.png"
myimages[7]="shit/teemo.png"
myimages[8]="shit/teemo.png"
myimages[9]="shit/teemo.png"
myimages[10]="shit/teemo.png"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<a href=# onclick="add()"><img id="mobs" src="'+myimages[ry]+'" border=0></a>')
}
random_imglink()
// Disable ghost dragging
document.getElementById('mobs').ondragstart = function() { return false; };