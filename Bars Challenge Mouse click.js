
var shade = [10,20,45,25,60]; 

var lim = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
	var i = 0;
  colorMode(HSB);
  noStroke();
	while(i<lim){

  fill(shade[i], 100, 100);
  rect(i*width/shade.length, 0, width/shade.length, height);
		i++;
	}
}
function mousePressed() {
	shade.push(random(0,100));
	lim++;
}
