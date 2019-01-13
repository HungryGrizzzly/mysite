function getRandomNumber(min, max){
    var num = Math.random();
    if(num > .5){
        return min + Math.random() * max;
    } else {
        return -( min + Math.random() * max);
    }
}