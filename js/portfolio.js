var portfolio = document.createElement('div');
portfolio.className = 'portfolio';
portfolio.style.width = window.innerWidth * 4 / 5 + 'px';
portfolio.style.height = window.innerHeight * 4 / 5 + 'px';
portfolio.style.top = window.innerHeight / 10 + 'px';
portfolio.style.left = window.innerWidth * 11 / 10 + 'px';

function showPortfolio(){
    portfolio.style.opacity = 1;
    portfolio.style.transform = 'rotateZ(0) rotateY(0) scale(1)';
}

function hidePortfolio(){
    portfolio.style.opacity = 0;
    portfolio.style.transform = 'rotateZ(-45deg) rotateY(90deg) scale(0)';
}
$('.canvas_wrap').append(portfolio);