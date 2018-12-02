function update() {
// Cookie counter
	document.getElementById('text').value = cookiecount;
	document.title = cookiecount + " Cookies";
// Auto clicker counter
	document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
	document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Cookies";
// Farm counter
	document.getElementById('ammountFarms').innerHTML = "You own " + farms + " Farms";
	document.getElementById('costFarms').innerHTML = ((farms+1) * 15 + " Cookies");
// DPS Counter
	document.getElementById('cookiespersecond').innerHTML = + (((autoClick)+ (farms*2))*multiplier) + " Cookies/s";


}
// Variables
var multiplier = 1;
var cookiecount = 0;
var autoClick = 0;
var farms = 0;

// Every click adds 1 cookie
function add() {
	cookiecount = cookiecount + 1
	update()
}
// Amount per upgrade
function timer() {
	cookiecount = cookiecount + autoClick;
	cookiecount = cookiecount + farms*2;
	update()
}
setInterval(timer, 1000)
// Save & Load
function save() {
	localStorage.setItem("cookiecount", cookiecount);
	localStorage.setItem("autoClick", autoClick);
	localStorage.setItem("farms", farms);
}
function load() {
	cookiecount = localStorage.getItem("cookiecount");
	cookiecount = parseInt(cookiecount);
	autoClick = localStorage.getItem("autoClick");
	autoClick = parseInt(autoClick);
	farms = localStorage.getItem("farms");
	farms = parseInt(farms);
	update()
}
// Upgrades
	// Auto clicker
function buyAutoClick() {
	if (cookiecount >= ((autoClick+1) * 12)) {
		cookiecount = cookiecount - ((autoClick+1) * 12);
		autoClick = autoClick + 1;
		update()
	}
}
	// Farm
function buyFarm() {
	if (cookiecount >= ((farms+1) * 15)) {
		cookiecount = cookiecount - ((farms+1) * 15);
		farms = farms + 1;
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
//-->