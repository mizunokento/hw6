var scorex = 200;
var scorey = 200;


var highscore = 0;

var needle = {
        ax: 195,
        ay: 0,
        bx: 205,
        by: 0,
        cx: 200,
        cy: 50
};

var circle = {
        x: 100,
        y: 400,
        vx: 0,
        vy: -3.5,
        r: 20,
        h: 30
};

var circle2 = {
        x: 140,
        y: 400,
        vx: 0,
        vy: -5,
        r: 15,
        h: 90
};

var circle3 = {
        x: 230,
        y: 400,
        vx: 0,
        vy: -3,
        r: 30,
        h: 270
};
var circle4 = {
        x: 100,
        y: 400,
        vx: 0,
        vy: -5,
        r: 25,
        h: 350
};

var circle5 = {
        x: 140,
        y: 400,
        vx: 0,
        vy: -4,
        r: 15,
        h: 11
};

var circle6 = {
        x: 230,
        y: 400,
        vx: 0,
        vy: -2.7,
        r: 20,
        h: 50
};


function setup() {
        createCanvas(400, 400);

}

function draw() {


        function drawscore() {
                fill(50);
                ellipse(200, 200, 10, 10);
        }

        if (keyIsDown(LEFT_ARROW)) {
                needle.ax -= 5;
                needle.bx -= 5;
                needle.cx -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
                needle.ax += 5;
                needle.bx += 5;
                needle.cx += 5;
        }

        if (circle.x < needle.cx + 10 && circle.x > needle.cx - 10 && circle.y < 55) {
                highscore += 1;
                circle.r *= 0;

        }
        if (circle2.x < needle.cx + 10 && circle2.x > needle.cx - 10 && circle2.y < 55) {
                highscore += 1;
                circle2.r *= 0;

        }
        if (circle3.x < needle.cx + 10 && circle3.x > needle.cx - 10 && circle3.y < 55) {
                highscore += 1;
                circle3.r *= 0;

        }
        if (circle4.x < needle.cx + 10 && circle4.x > needle.cx - 10 && circle4.y < 55) {
                highscore += 1;
                circle4.r *= 0;

        }
        if (circle5.x < needle.cx + 10 && circle5.x > needle.cx - 10 && circle5.y < 55) {
                highscore += 1;
                circle5.r *= 0;

        } else if (circle6.x < needle.cx + 10 && circle6.x > needle.cx - 10 && circle6.y < 55) {
                highscore += 1;
                circle6.r *= 0;

        }





        background(255);
        paint(circle);
        paint(circle2);
        paint(circle3);
        paint(circle3);
        paint(circle4);
        paint(circle6);
        dat(needle);
        textSize(20);
        text(highscore, 300, 385);



        move(circle);
        move(circle2);
        move(circle3);
        move(circle4);
        move(circle5);
        move(circle6);


        bounce(circle);
        bounce(circle2);
        bounce(circle3);
        bounce(circle4);
        bounce(circle5);
        bounce(circle6);
}

function dat(needle) {
        stroke(4);
        fill(0);
        triangle(needle.ax, needle.ay, needle.bx, needle.by, needle.cx,
                needle.cy);
}

function paint(circle) {
        colorMode(HSB);
        fill(circle.h, 100, 100);
        noStroke();
        ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
}

function move(circle) {
        circle.x += circle.vx; // circle.x = circle.x + circle.vx
        circle.y += circle.vy;


        circle.r *= 0.995;
}

function bounce(circle) {

        if (circle.y > height + 20 || circle.y < 0) {
                circle.y = 420;
                circle.x = random(1, 400);
                circle.r = random(20, 40);
        }
}

function keyPressed() {
        if (keyCode === UP_ARROW) {
                circle.vy = circle.vy * 1.1;
                circle2.vy = circle.vy * 1.1;
                circle3.vy = circle.vy * 1.1;
                circle4.vy = circle.vy * 1.1;
                circle5.vy = circle.vy * 1.1
                circle6.vy = circle.vy * 1.1;
        } else if (keyCode === DOWN_ARROW) {
                circle.vy = circle.vy * 0.9;
                circle6.vy = circle.vy * 0.9;
                circle2.vy = circle.vy * 0.9;
                circle3.vy = circle.vy * 0.9;
                circle4.vy = circle.vy * 0.9;
                circle5.vy = circle.vy * 0.9;
        }






}
