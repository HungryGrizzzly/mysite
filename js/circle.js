function Circle(i, radius) {
    this.f = i * 0.1 * Math.PI / 180;
    this.s = 0.1 * Math.PI / 180;
    this.radius = radius;
    this.largeRadius = 250;
    this.closer;
    setInterval(() => {
        this.f += this.s;
    }, 10)

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(innerWidth / 2 + this.largeRadius * Math.cos(this.f), innerHeight / 2 + this.largeRadius * Math.sin(this.f), this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fill();
    }
}
