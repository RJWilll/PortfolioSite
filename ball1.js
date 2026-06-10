class Ball {
    constructor(id, xPct, yPct, xVel, yVel, sectionIndex) {
        this.div = document.getElementById(id);
        this.size = 0; 

        this.x = window.innerWidth * xPct;
        this.y = document.body.scrollHeight * yPct;

        this.xVel = xVel;
        this.yVel = yVel;

        this.sectionIndex = sectionIndex;

        this.div.style.position = 'absolute';
        this.div.style.margin = '0';
        this.div.style.left = this.x + 'px';
        this.div.style.top = this.y + 'px';
    }
}

function getSectionBounds(index) {
    const dividers = [
        document.getElementById('div1'),
        document.getElementById('div2'),
        document.getElementById('div3'),
    ];

    const pageH = document.body.scrollHeight;

    const boundaries = [
        0,
        dividers[0] ? dividers[0].getBoundingClientRect().top + window.scrollY : pageH * 0.33,
        dividers[1] ? dividers[1].getBoundingClientRect().top + window.scrollY : pageH * 0.66,
        dividers[2] ? dividers[2].getBoundingClientRect().top + window.scrollY : pageH,
    ];

    return {
        top: boundaries[index],
        bottom: boundaries[index + 1],
    };
}

const balls = [
    new Ball('ball1', 0.05, 0.05, 2, 2, 0),
    new Ball('ball2', 0.05, 0.38, 3, -3, 1),
    new Ball('ball3', 0.60, 0.42, -3, 3, 1),
    new Ball('ball4', 0.30, 0.44, -3, -3, 1),
    new Ball('ball5', 0.30, 0.68, 2, 2, 2),
    new Ball('ball6', 0.50, 0.72, -2, 2, 2),
    new Ball('ball7', 0.70, 0.66, 2, 2, 2),
];

function bounce(ball) {
    const W = window.innerWidth;
    const bounds = getSectionBounds(ball.sectionIndex);

    ball.size = ball.div.offsetWidth;

    ball.x += ball.xVel;
    ball.y += ball.yVel;

    if (ball.x + ball.size > W) {
        ball.x = W - ball.size;
        ball.xVel *= -1;
    } else if (ball.x < 0) {
        ball.x = 0;
        ball.xVel *= -1;
    }

    if (ball.y + ball.size > bounds.bottom) {
        ball.y = bounds.bottom - ball.size;
        ball.yVel *= -1;
    } else if (ball.y < bounds.top) {
        ball.y = bounds.top;
        ball.yVel *= -1;
    }

    ball.div.style.left = ball.x + 'px';
    ball.div.style.top = ball.y + 'px';
}

function loop() {
    for (const ball of balls) {
        bounce(ball);
    }
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);