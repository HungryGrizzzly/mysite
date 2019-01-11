var innerWidth = window.innerWidth,
    innerHeight = window.innerHeight;
var canvas = document.getElementById("myCanvas");
canvas.width = innerWidth * 4;
canvas.height = innerHeight;

var ctx = canvas.getContext('2d');

var circleArray = [];
for (var i = 0; i < 28; i++) {
    circleArray.push(new Circle(i * 129, 3))
}

var snowflakesArray = [];
for (let i = 0; i < 100; i++) {
    snowflakesArray.push(new Snowflake(i));
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth * 4, innerHeight);
    ctx.fillStyle = '#343434';
    ctx.fillRect(0, 0, innerWidth * 4, innerHeight);

    snowflakesArray.map(snowflake => {
        snowflake.draw();
        snowflake.update();
    })
    circleArray.map(circle => {
        circle.draw();
    })
}

animate();
function isIntersect(point, circle) {
    return Math.sqrt((point.x - circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
}
canvas.addEventListener('click', (e) => {
    console.log('click')
    let point = {
        x: e.clientX,
        y: e.clientY
    }

    snowflakesArray.map(snowflake => {
        if (isIntersect(point, snowflake)) {
            snowflake.grow();
        }
    })
})

$('#portfolio-link').click(() => {
    showPortfolio();
    hidePrices();
})

$('#home-link').click(() => {
    hidePortfolio();
    hidePrices();
})

$('#prices-link').click(() => {
    hidePortfolio();
    showPrices();
})

$('#contacts-link').click(() => {
    hidePortfolio();
    hidePrices();
})