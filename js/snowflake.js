function Snowflake(id) {
    this.id = id;
    this.radius = Math.random() * 13 + 2;
    this.oldRadius = this.radius;
    this.x = Math.random() * innerWidth * 4;
    this.y = Math.random() * innerHeight;
    this.isGrowing = false;
    this.opacity = .6;

    var rand = Math.random();
    if (rand > 0.5) {
        this.dx = Math.random() * this.radius / 10;

    } else {
        this.dx = -Math.random() * this.radius / 10;
    }
    rand = Math.random();
    if (rand > 0.5) {
        this.dy = Math.random() * this.radius / 10;

    } else {
        this.dy = -Math.random() * this.radius / 10;
    }
    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(0,0,0,${this.opacity})`;
        ctx.fill();
        this.update();
    }

    this.update = () => {
        if (this.x + this.radius > innerWidth * 4 || this.x - this.radius < 0) {
            this.dx = - this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = - this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }

    this.grow = () => {
        if (!this.isGrowing) {
            this.isGrowing = true;
            this.g= setInterval(() => {
                if (this.radius < 50) {
                    this.radius++;
                    this.opacity -= .05;
                } else {
                    this.isGrowing = false;
                    this.radius = this.oldRadius;
                    this.opacity = .6;
                    clearInterval(this.g);
                }
            }, 50)
        }
    }
}
