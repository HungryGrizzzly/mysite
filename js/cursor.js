var cursor = document.getElementById('cursor'),
    mouseX = (e) => {
        return e.clientX;
    },
    mouseY = (e) => {
        return e.clientY;
    }

    window.onmousemove = (e) =>{
        console.log('mouse move')
        cursor.style.transform=`translateX(${mouseX(e)}px) translateY(${mouseY(e)}px)`
    }
