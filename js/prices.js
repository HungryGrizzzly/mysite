let start;
var prices = document.createElement('div');
prices.className = 'prices';

prices.style.width = '1200px';
prices.style.height = '600px';
prices.style.top = (window.innerHeight - 600) / 2 + 'px';
prices.style.left = window.innerWidth * 2 + (window.innerWidth - 1200) / 2 + 'px';
// prices.style.width = window.innerWidth * 4 / 5 + 'px';
// prices.style.height = window.innerHeight * 4 / 5 + 'px';
// prices.style.top = window.innerHeight / 10 + 'px';
// prices.style.left = window.innerWidth * 21 / 10 + 'px';

function PriceCard(id) {
    this.needToHide = false;
    this.id = id;
    this.x = Math.random() * 400 + 500;
    this.y = Math.random() * 200 + 1000;
    this.angle = Math.random() * 300 + 600;
    this.card = document.createElement('div');
    this.card.className = 'price_card';
    this.card.style.width = '400px';
    this.card.style.height = '600px';

    this.front = document.createElement('div');
    this.front.className = 'price_front';
    this.back = document.createElement('div');
    this.back.className = 'price_back';

    this.card.append(this.front);
    this.card.append(this.back);

    this.start;

    this.createDxDyDangle = () => {
        let num = Math.random()
        if (num > 0.5) {
            this.dx = Math.random() * 6 + 2;
        } else {
            this.dx = -Math.random() * 6 + 2;
        }
        num = Math.random()
        if (num > 0.5) {
            this.dy = Math.random() * 2 + 8;
        } else {
            this.dy = -Math.random() * 2 + 8;
        }
        num = Math.random()
        if (num > 0.5) {
            this.dangle = Math.random() * 4;
        } else {
            this.dangle = -Math.random() * 4;
        }
    }

    this.hideCard = () => {
        this.createDxDyDangle();
        if (this.needToHide) {
            this.start = Date.now();
            this.card.style.transition = '';
            this.timer = setInterval(() => {
                let timePassed = Date.now() - this.start;
                if (timePassed > 3000) {
                    clearInterval(this.timer)
                    console.log('stop')
                }
                this.draw();
            }, 10)
        }
        this.needToHide = false;
    }

    this.showCard = () => {
        clearInterval(this.timer);
        this.card.style.transition = '2s';
        this.card.style.transform = 'translateX(0) translateY(0) rotateY(0)'
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.dx = Math.random() * 6 + 2;
        this.dy = Math.random() * 6 + 2;
        this.dangle = Math.random() * 4;
        this.needToHide = true;
    }

    this.draw = () => {
        this.card.style.transform = ` translateX(${this.x}px) translateY(${this.y}px) rotateY(${this.angle}deg)`;
        this.x += this.dx;
        this.y += this.dy;
        this.angle += this.dangle;
    }

    this.firstStart = () => {
        this.card.style.transition = '0s';
        this.card.style.transform = ` translateX(${this.x}px) translateY(${this.y}px) rotateY(${this.angle}deg)`;
    }
}

var priceCards = [];
for (let i = 0; i < 3; i++) {
    priceCards.push(new PriceCard(i))
}


priceCards.map(card => {
    card.firstStart();
    card.createDxDyDangle();
    prices.append(card.card);
})


$('.canvas_wrap').append(prices);

function showPrices() {
    priceCards.map(card => {
        card.showCard();
    })

}

function hidePrices() {
    priceCards.map(card => {
        card.hideCard();
    })

}
