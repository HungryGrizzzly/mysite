var innerWidth = window.innerWidth - 20,
    innerHeight = window.innerHeight;
var canvas = document.getElementById("myCanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext('2d');




function Circle(i, radius) {
    this.f = i * 0.1 * Math.PI/180;
    this.s = 0.1 * Math.PI / 180;
    this.radius = radius;
    this.largeRadius = 250;
    setInterval(() => {
        this.f += this.s;
    }, 10)

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(innerWidth/2 + this.largeRadius * Math.cos(this.f), innerHeight/2 + this.largeRadius * Math.sin(this.f), this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fill();
    }

    this.update = () => {


    }
}

var circleArray = [];
for(var i = 0; i<28; i++){
    circleArray.push(new Circle(i*129, 3))
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillStyle = '#333333';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
   
    circleArray.map(circle=>{
        circle.draw();
    })
}

animate();