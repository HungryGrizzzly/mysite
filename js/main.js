var cards = document.getElementsByClassName('desc_card');
for(var i = 0; i < cards.length; i++){
    cards[i].style.top= window.innerHeight/2 - 195 + 'px';
    cards[i].style.left = window.innerWidth/2 - 190 + 'px';
    console.log(cards[i].clientTop)
}