$('li').click((e)=>{
    $('.canvas_wrap').css('transform', `translateX(${ - e.target.getAttribute('data-num') * window.innerWidth}px)`)
})