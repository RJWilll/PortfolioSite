
class ball
{
    constructor(div, leftPos, heightPos, xVelocity, yVelocity, topPos, bottomPos)
    {
        this.div = div;
        this.leftPos = leftPos;
        this.heightPos = heightPos;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.topPos = topPos;
        this.bottomPos = bottomPos;
    }
}

let innerWidth = window.innerWidth;

const divider1 = document.getElementById("div1");
const divider2 = document.getElementById("div2");
const divider3 = document.getElementById("div3");


let ball1 = new ball(document.getElementById("ball1"), document.getElementById("ball1").getBoundingClientRect().left, document.getElementById("ball1").getBoundingClientRect().top,
                         2, 2, 0, divider1.getBoundingClientRect().top - 450);
let ball2 = new ball(document.getElementById("ball2"), document.getElementById("ball2").getBoundingClientRect().left, document.getElementById("ball2").getBoundingClientRect().top,
                        3, -3, divider1.getBoundingClientRect().bottom, divider2.getBoundingClientRect().top - 240);
let ball3 = new ball(document.getElementById("ball3"), document.getElementById("ball3").getBoundingClientRect().left, document.getElementById("ball3").getBoundingClientRect().top,
                        -3, 3, divider1.getBoundingClientRect().bottom, divider2.getBoundingClientRect().top - 240);
let ball4 = new ball(document.getElementById("ball4"), document.getElementById("ball4").getBoundingClientRect().left, document.getElementById("ball4").getBoundingClientRect().top,
                        -3, -3, divider1.getBoundingClientRect().bottom, divider2.getBoundingClientRect().top - 240);
let ball5 = new ball(document.getElementById("ball5"), document.getElementById("ball5").getBoundingClientRect().left, document.getElementById("ball5").getBoundingClientRect().top,
                        2, 2, divider2.getBoundingClientRect().bottom, divider3.getBoundingClientRect().top - 310);
let ball6 = new ball(document.getElementById("ball6"), document.getElementById("ball6").getBoundingClientRect().left, document.getElementById("ball6").getBoundingClientRect().top,
                        -2, 2, divider2.getBoundingClientRect().bottom, divider3.getBoundingClientRect().top - 310);
let ball7 = new ball(document.getElementById("ball7"), document.getElementById("ball7").getBoundingClientRect().left, document.getElementById("ball7").getBoundingClientRect().top,
                        2, 2, divider2.getBoundingClientRect().bottom, divider3.getBoundingClientRect().top - 310);


function movediv(timestamp)
{
    innerWidth = window.innerWidth
    bounce(ball1, 420);
    bounce(ball2, 220);
    bounce(ball3, 220);
    bounce(ball4, 220);
    bounce(ball5, 310);
    bounce(ball6, 310);
    bounce(ball7, 310);


    requestAnimationFrame(movediv);
}

function bounce(thisBall, widthOffset, timestamp)
{
    thisBall.leftPos += thisBall.xVelocity;
    thisBall.heightPos += thisBall.yVelocity;
    thisBall.div.style.marginLeft = (thisBall.leftPos + thisBall.xVelocity) + 'px';
    thisBall.div.style.marginTop = (thisBall.heightPos + thisBall.yVelocity) + 'px';

    console.log(thisBall.xVelocity);

    if(thisBall.leftPos > innerWidth - widthOffset || thisBall.leftPos < 0)
    {
        thisBall.xVelocity *= -1;
    }

    if(thisBall.heightPos > thisBall.bottomPos || thisBall.heightPos < thisBall.topPos)
    {
        thisBall.yVelocity *= -1;
    }
}

requestAnimationFrame(movediv);










 