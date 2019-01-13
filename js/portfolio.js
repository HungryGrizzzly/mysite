var portfolio = document.createElement('div');
portfolio.className = 'portfolio';
portfolio.style.width = window.innerWidth * 4 / 5 + 'px';
portfolio.style.height = window.innerHeight * 4 / 5 + 'px';
portfolio.style.top = window.innerHeight / 10 + 'px';
portfolio.style.left = window.innerWidth * 11 / 10 + 'px';
$('.canvas_wrap').append(portfolio);


class PortCard {
    constructor(id) {
        this.colors = ['rgb(100,10,10)', 'rgb(10,100,10)', 'rgb(10,10,100)'];
        this.x = getRandomNumber(400, 400),
            this.y = getRandomNumber(1000, 400);
        this.portCard = document.createElement('div');
        this.portCard.id = id;
        this.portCard.className = 'port_card';
        this.portCard.style.transform = `translateX(${this.x}px) translateY(${this.y}px)`;
        this.rand = Math.random() * 3;
        this.portCard.style.background = this.colors[parseInt(this.rand)];
    }

    showCard() {
        this.portCard.style.transform = `translateX(0px) translateY(0px)`;
    }

    hideCard() {
        this.x = getRandomNumber(400, 400),
            this.y = getRandomNumber(1000, 400);
        this.portCard.style.transform = `translateX(${this.x}px) translateY(${this.y}px)`;
    }
}

var portCards = []
for (let i = 0; i < 5; i++) {
    var portCard = new PortCard(i);
    portCards.push(portCard);
    portfolio.append(portCard.portCard);
}



function showPortfolio() {
    portCards.map(element => {
        element.showCard();
    })

}

function hidePortfolio() {
    portCards.map(element => {
        element.hideCard();
    })
}

$('.port_card').mouseover((e) => {
    e.target.style.transform = 'translateY(-10px) translateZ(10px)';
})

$('.port_card').mouseleave((e) => {
    e.target.style.transform = '';
})

$('.port_card').click((e) => {
    var moreInfo = new MoreInfo(1);
    moreInfo.createDesc();
})


class MoreInfo {
    constructor(id) {
        this.wraper = document.createElement('div');
        this.wraper.className = 'more_info';
        this.releaseWraper();
    }

    releaseWraper() {
        document.body.append(this.wraper);
    }

    createDesc() {
        this.descWindow = document.createElement('div');
        this.descWindow.className = 'desc';
        this.wraper.append(this.descWindow);
        this.closeBtn = document.createElement('div');
        this.closeBtn.className = 'close_btn';
        this.closeBtn.innerText = 'ЗАКРЫТЬ';
        this.closeBtn.onclick = () => {
            document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1]);
        }
        this.descWindow.append(this.closeBtn);
    }
}



   // var x = getRandomNumber(400, 400),
    //     y = getRandomNumber(1000, 400);
    // var portCard = document.createElement('div');
    // portCard.className = 'port_card';
    // portCard.style.transform = `translateX(${x}px) translateY(${y}px)`
    // var rand = Math.random() * 3;
    // portCard.style.background = colors[parseInt(rand)];
    // portCard.style.visibility = 'hidden';