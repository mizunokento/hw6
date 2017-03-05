function setup() { 
  createCanvas(400, 400);
	background(50);
	stroke(255);
	strokeWeight(1);
	
	function drawone(){
	for(i=0;i<=400;i++){
		
stroke(randomGaussian(200,500));
 point(randomGaussian(200,40),i);}
	}
	
	for(z=0;z<=100;z++){
	drawone();
	drawone();}
	
	
	 filter(BLUR,1);

}
