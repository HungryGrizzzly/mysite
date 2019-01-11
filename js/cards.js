$('.card').mouseenter(() => {
    circleArray.map(circle => {
        clearInterval(circle.closer)
        circle.closer = setInterval(() => {
            if (circle.largeRadius > 220) {
                circle.largeRadius = circle.largeRadius - .5;
            }
        }, 10)
    })
}).mouseout(() => {
    circleArray.map(circle => {
        clearInterval(circle.closer)
        circle.closer = setInterval(()=>{
            if(circle.largeRadius < 250){
                circle.largeRadius = circle.largeRadius + .5;
            }
        }, 10)        
    })
})
var cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
    cards[i].style.top = window.innerHeight / 2 - 200 + 'px';
    cards[i].style.left = window.innerWidth / 2 - 200 + 'px';
}

var angle = 180;
var text = ['Разработка сайтов под ключ', 'Приветствую Вас на своем сайте!','Вы можете ознакомиться с моими работами'];
var counter = 0;
console.log($('.front').data('current'))
$('.front').append(text[0]);
setInterval(()=>{
    if(counter< text.length){
        counter++;
    } else {
        counter = 0;
    }
    if($('.front').data('current') == 1){
        $('.back').text(text[counter]);
        $('.front').data('current', 0);
    } else{
        $('.front').text( text[counter]);
        $('.front').data('current', 1);
    }
    $('.front').css('transform', `rotateY(${angle}deg)`);
    angle += 180;
    $('.back').css('transform', `rotateY(${angle}deg)`);
},4000)

$('.card').click(()=>{
    if(counter == 2){
        $('.canvas_wrap').css('transform', `translateX(${ - 2 * window.innerWidth}px)`)
    }
})

